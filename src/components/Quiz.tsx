import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/data/egypt";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === quizQuestions[currentQ].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQ < quizQuestions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const progress = ((currentQ + (showResult ? 1 : 0)) / quizQuestions.length) * 100;

  const getResultFeedback = () => {
    if (score === quizQuestions.length) return "ممتاز! أنت فرعون حقيقي 👑";
    if (score >= quizQuestions.length * 0.7) return "رائع! معرفتك قوية بتاريخ مصر 🏺";
    if (score >= quizQuestions.length * 0.5) return "جيد! لكن يمكنك معرفة المزيد 📜";
    return "حاول مرة أخرى، مصر بها الكثير لتكتشفه 🐪";
  };

  return (
    <section id="quiz" className="py-24 relative bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="quiz-title">اختبر معرفتك بمصر</h2>
          <p className="text-lg text-muted-foreground">هل تعرف تاريخ وحضارة مصر جيداً؟</p>
        </motion.div>

        <div className="bg-background border border-border rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-bold text-muted-foreground">
                    سؤال {currentQ + 1} من {quizQuestions.length}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    النتيجة: {score}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
                  {quizQuestions[currentQ].q}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizQuestions[currentQ].options.map((option, index) => {
                    const isCorrect = index === quizQuestions[currentQ].answer;
                    const isSelected = selectedOption === index;
                    
                    let btnClass = "bg-card border-border hover:border-primary text-foreground";
                    if (isAnswered) {
                      if (isCorrect) {
                        btnClass = "bg-green-500/20 border-green-500 text-green-600 dark:text-green-400";
                      } else if (isSelected) {
                        btnClass = "bg-red-500/20 border-red-500 text-red-600 dark:text-red-400";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={isAnswered}
                        className={`p-4 border rounded-xl text-right font-bold transition-all ${btnClass}`}
                        data-testid={`quiz-option-${index}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
                data-testid="quiz-result"
              >
                <div className="w-32 h-32 mx-auto border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                  <span className="text-4xl font-bold text-primary">
                    {score}/{quizQuestions.length}
                  </span>
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-4">
                  {getResultFeedback()}
                </h3>
                <button
                  onClick={restartQuiz}
                  className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                  data-testid="quiz-restart"
                >
                  إعادة الاختبار
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
