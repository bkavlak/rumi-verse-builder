
import { Language } from '@/lib/i18n';

export interface MarkdownBlogPost {
  frontmatter: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    category: 'theoria' | 'praxis' | 'poiesis';
    image?: string;
  };
  content: string;
}

export const markdownContent: Record<string, Record<Language, MarkdownBlogPost>> = {
  'oyleyse-baslasin': {
    en: {
      frontmatter: {
        id: "oyleyse-baslasin",
        title: "Let It Begin!",
        excerpt: "So let it begin! Three… three… three… one or zero.",
        date: "2025-08-12",
        tags: ["poiesis", "poem"],
        category: "poiesis"
      },
      content: "Original Turkish available. English version coming soon.\n\nÖyleyse başlasın!"
    },
    tr: {
      frontmatter: {
        id: "oyleyse-baslasin",
        title: "Öyleyse Başlasın!",
        excerpt: "Öyleyse başlasın! Üç… üç… üç… bir ya da sıfır.",
        date: "2025-08-12",
        tags: ["poiesis", "şiir", "deneme"],
        category: "poiesis"
      },
      content: "Öyleyse başlasın!\n\n\nÜç… üç… üç… bir ya da sıfır.\nEvet, evet, sıfır.\nBir dakika, tekrar kontrol edelim…\n\nEvet, evet, evet, sıfır!\nOtuz bir ya da sıfır.\nYani Otuz. Otuz bir ya da otuz.\n\nBu yaşta başlasın diyorum herşey.\nHer şeyi kastetmiyorum herşey diyorum.\n\nBu yaşta başlasın herşey.\nYüzüne benim bile bakmadığım yazılarım,\nArka arkaya sıralanmış kelimeler\nİmla hatalarıyla süslü ve sayısal bir çöp.\n\nBaşka bir şeyden mi ibaret yaşadıklarım?\nBelki öyledir, belki değil.\nBelki huzursuz bir anımda saydırdığım\ngizli emellerim verecek beni ele.\n\nKimdir nedir diye merak edeceklerini sanmıyorum.\nBizatihi ben kendimi sorgulamaktan bitmiş bir haldeyken\notuz ya otuz bir kere oturduğum bu yaş partisinde\nkimseden herhangi bir beklentim olmadığını yazmak için\nbas bas bağırıyorum.\n\nEvet, evet, evet. Gerçekten de öyle!\nGerçekten de havalar tahmin edilebilir gibi değil.\nAylar üstü alemde neler olup bittiğine dair\nherkesin bir fikri var fakat ceviz kabuğunu elleriyle kırabilen sayılıdır bu dünyada.\n\nBu dünyada, ki bu dünya bir semboldür bunu bilenler için,\nhiçbir şey yani her şeyin karşıtı olan hiçbir şey\ndurduğu gibi durmaz!\n\nEvet, evet, durmaz, yerinde dursun diye dökülen asfaltlar\nDurmaz, sırasına oturtulmuş yedi yaşında bir çocuk\nDurmaz, dursun diye alınmış vitrindeki saçmalıklar.\n\nBu dünya ki bir gök ile çevrelenmiş boşluğun bir yerinde\nSalıncak gibi bir şeyler ateşleyerek dolanıyor bazı insanlar\nBu dünyanın bir yerinde doğmuşum ben otuz ya otuz bir sene olmuş\nHepsini hatırlayan bir kişi çıkmaz ne kadar iddia etseler de tersini\n\nEh bu dünya! Evet, evet, evet…\nUnutarak içtiğim antlar!\nGökyüzünde gözükmeyen bütün gaz taneleri!\nOrdasınız değil mi?\nOrdasınız…\n\nÖyleyse başlasın!"
    },
    de: {
      frontmatter: {
        id: "oyleyse-baslasin",
        title: "Dann soll es beginnen!",
        excerpt: "Dann soll es beginnen! Drei… drei… drei… eins oder null.",
        date: "2025-08-12",
        tags: ["poiesis", "gedicht"],
        category: "poiesis"
      },
      content: "Original auf Türkisch verfügbar. Deutsche Version folgt bald.\n\nÖyleyse başlasın!"
    }
  }
};
