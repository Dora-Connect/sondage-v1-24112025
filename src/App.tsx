import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { CheckCircle2, Clock, Users, FileText, AlertCircle, Search, ArrowRight, Link2, Shield, Zap, Eye, Mail, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ContactForm } from "./components/ContactForm";
import doraLogo from "figma:asset/logo.png";
import { useLanguageDetection } from "./hooks/useLanguageDetection";
import { translations } from "./translations";
import { useState, useEffect } from "react";

export default function App() {
  const { language, changeLanguage, isLoading } = useLanguageDetection();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update page title when language changes
  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = language;
  }, [language, t.meta.title]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#3461FF] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={doraLogo}
                alt="DORA Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-['Inter'] text-[#0A2540]">DORA</h1>
                <p className="text-[10px] sm:text-xs text-gray-500">{t.nav.tagline}</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3 sm:gap-6 md:gap-8">
              <a href="#about" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#0A2540] transition-colors">{t.nav.about}</a>
              <a href="#survey" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#0A2540] transition-colors">{t.nav.survey}</a>

              <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4 border-l pl-3 sm:pl-4">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors ${language === 'fr'
                    ? 'bg-[#3461FF] text-white'
                    : 'text-gray-600 hover:text-[#0A2540]'
                    }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`text-xs sm:text-sm px-2 py-1 rounded transition-colors ${language === 'en'
                    ? 'bg-[#3461FF] text-white'
                    : 'text-gray-600 hover:text-[#0A2540]'
                    }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#0A2540] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 space-y-3 border-t mt-3">
              <a
                href="#about"
                className="block py-2 text-sm text-gray-600 hover:text-[#0A2540] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#survey"
                className="block py-2 text-sm text-gray-600 hover:text-[#0A2540] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.survey}
              </a>

              <div className="flex items-center gap-2 pt-3 border-t">
                <button
                  onClick={() => {
                    changeLanguage('fr');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 text-sm px-3 py-2 rounded transition-colors ${language === 'fr'
                    ? 'bg-[#3461FF] text-white'
                    : 'text-gray-600 hover:text-[#0A2540] border border-gray-300'
                    }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 text-sm px-3 py-2 rounded transition-colors ${language === 'en'
                    ? 'bg-[#3461FF] text-white'
                    : 'text-gray-600 hover:text-[#0A2540] border border-gray-300'
                    }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full text-center">
                <div className="w-2 h-2 bg-[#3461FF] rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-[#3461FF]">{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0A2540] leading-tight">
                {t.hero.title}
              </h1>

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600">
                <p>
                  {t.hero.description1}
                </p>
                <p>
                  <span className="text-[#FF8C00]">{t.hero.doraHighlight}</span> {t.hero.description2}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  className="bg-[#3461FF] hover:bg-[#2850CC] text-white px-5 sm:px-6 py-4 sm:py-5 rounded-full text-base sm:text-lg group w-full sm:w-auto sm:inline-flex justify-center"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSftgnNdZFuihXwRZdFYq5rByNXYWmgEvyJ9-ZQIXp18X96cBg/viewform?usp=sharing&ouid=105221693271180598484"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">🇫🇷</span>
                    {t.hero.frenchForm}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-[#FF8C00] hover:bg-[#FF6B00] text-white px-5 sm:px-6 py-4 sm:py-5 rounded-full text-base sm:text-lg group w-full sm:w-auto sm:inline-flex justify-center"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeakPCkOO7N_92yl-cLtmOrU-HVpSDWIEpSfLozIwha59z5Zw/viewform?usp=sharing&ouid=105221693271180598484"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">🇬🇧</span>
                    {t.hero.englishForm}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-gray-500">
                {t.hero.languageChoice}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00]" />
                  <span className="text-xs sm:text-sm text-gray-600">{t.hero.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00]" />
                  <span className="text-xs sm:text-sm text-gray-600">{t.hero.questions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8C00]" />
                  <span className="text-xs sm:text-sm text-gray-600">{t.hero.anonymous}</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-48 rounded-3xl bg-gradient-to-br from-[#3461FF] to-[#2850CC] p-6 flex items-center justify-center">
                    <Users className="w-20 h-20 text-white opacity-80" />
                  </div>
                  <div className="w-full h-32 rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDg5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Diaspora member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="w-full h-32 rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1617244148233-5f2134f25d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzNTc1NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Diaspora member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-48 rounded-3xl bg-gradient-to-br from-[#FF8C00] to-[#FF6B00] p-6 flex items-center justify-center">
                    <Link2 className="w-20 h-20 text-white opacity-80" />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3461FF]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About DORA Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0A2540]">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {t.about.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: t.about.transparency.title,
                description: t.about.transparency.description,
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: t.about.speed.title,
                description: t.about.speed.description,
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: t.about.tracking.title,
                description: t.about.tracking.description,
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: t.about.reliability.title,
                description: t.about.reliability.description,
                color: "from-purple-500 to-purple-600"
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform mx-auto`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl text-[#0A2540]">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Survey Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0A2540]">
              {t.whySurvey.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {t.whySurvey.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: t.whySurvey.delays.title,
                description: t.whySurvey.delays.description,
                stat: t.whySurvey.delays.stat
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: t.whySurvey.contradictory.title,
                description: t.whySurvey.contradictory.description,
                stat: t.whySurvey.contradictory.stat
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: t.whySurvey.noTracking.title,
                description: t.whySurvey.noTracking.description,
                stat: t.whySurvey.noTracking.stat
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: t.whySurvey.noTransparency.title,
                description: t.whySurvey.noTransparency.description,
                stat: t.whySurvey.noTransparency.stat
              }
            ].map((problem, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#3461FF] transition-all group">
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {problem.icon}
                    </div>
                  </div>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm">
                    {problem.stat}
                  </Badge>
                  <h3 className="text-lg sm:text-xl text-[#0A2540]">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Survey CTA Section */}
      <section id="survey" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#3461FF] to-[#0A2540]">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            {t.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100">
            {t.cta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Badge className="bg-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base backdrop-blur-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {t.cta.duration}
            </Badge>
            <Badge className="bg-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base backdrop-blur-sm">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {t.cta.questions}
            </Badge>
            <Badge className="bg-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base backdrop-blur-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {t.cta.anonymous}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              asChild
              className="bg-white text-[#3461FF] hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg group shadow-xl w-full sm:w-auto"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftgnNdZFuihXwRZdFYq5rByNXYWmgEvyJ9-ZQIXp18X96cBg/viewform?usp=sharing&ouid=105221693271180598484"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">🇫🇷</span>
                {t.hero.frenchForm}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#FF8C00] text-white hover:bg-[#FF6B00] px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg group shadow-xl w-full sm:w-auto"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeakPCkOO7N_92yl-cLtmOrU-HVpSDWIEpSfLozIwha59z5Zw/viewform?usp=sharing&ouid=105221693271180598484"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">🇬🇧</span>
                {t.hero.englishForm}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-blue-200">
            {t.cta.privacy}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0A2540]">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {t.contact.description}
            </p>
            <div className="pt-4 sm:pt-6">
              <ContactForm className="bg-[#3461FF] hover:bg-[#2850CC] text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-base sm:text-lg shadow-xl w-full sm:w-auto inline-flex items-center justify-center" language={language}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.contact.button}
              </ContactForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
