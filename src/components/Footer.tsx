export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A84C\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-serif text-primary mb-6 flex items-center gap-2">
            <span>🏺</span>
            مصر الخالدة
          </div>
          
          <div className="text-2xl tracking-[0.5em] text-primary/40 font-serif mb-8 select-none">
            𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀇
          </div>
          
          <div className="flex gap-6 mb-8 text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">الرئيسية</a>
            <a href="#ancient" className="hover:text-primary transition-colors">الحضارة</a>
            <a href="#tourism" className="hover:text-primary transition-colors">السياحة</a>
            <a href="#culture" className="hover:text-primary transition-colors">الثقافة</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} مصر الخالدة. جميع الحقوق محفوظة. تم البناء بفخر.
          </p>
        </div>
      </div>
    </footer>
  );
}
