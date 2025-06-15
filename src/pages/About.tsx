
import { Navigation } from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, ExternalLink, Instagram, Twitter } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const aboutContent = {
    en: {
      bio: "I am an artist passionate about the intersection of theater and music. My work explores contemporary themes through traditional and experimental forms, creating immersive experiences that challenge and inspire audiences.",
      journey: "My artistic journey began in childhood, influenced by the rich cultural heritage of my homeland. Over the years, I have developed a unique voice that blends Eastern and Western artistic traditions.",
      philosophy: "I believe art should be accessible, transformative, and deeply human. Through my performances and compositions, I strive to create moments of connection and understanding."
    },
    tr: {
      bio: "Tiyatro ve müziğin kesişiminde tutkulu bir sanatçıyım. Çalışmalarım geleneksel ve deneysel formlar aracılığıyla çağdaş temaları keşfederek, izleyicilere meydan okuyan ve onları ilham veren sürükleyici deneyimler yaratır.",
      journey: "Sanatsal yolculuğum çocuklukta, vatanımın zengin kültürel mirasından etkilenerek başladı. Yıllar içinde, Doğu ve Batı sanat geleneklerini harmanlayan benzersiz bir ses geliştirdim.",
      philosophy: "Sanatın erişilebilir, dönüştürücü ve derinlemesine insani olması gerektiğine inanıyorum. Performanslarım ve kompozisyonlarım aracılığıyla bağlantı ve anlayış anları yaratmaya çalışıyorum."
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.description')}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent[language].bio}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Artistic Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent[language].journey}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent[language].philosophy}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Connect</h2>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
