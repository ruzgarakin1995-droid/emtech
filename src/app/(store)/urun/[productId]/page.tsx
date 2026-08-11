import { EmtechProductDetail } from '@/themes/emtech/components/EmtechProductDetail';
import { categoriesData } from '@/themes/emtech/data/categories';
import { notFound } from 'next/navigation';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { prisma } from '@/lib/prisma';

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params;
  
  // Try to find the product in the database first
  let foundProduct: any = null;
  let categoryTitle = "";
  let detailedFeatures: { title: string, desc: string }[] = [];

  try {
    if (prisma && prisma.ecomProduct) {
      const dbProduct = await prisma.ecomProduct.findFirst({
        where: { id: resolvedParams.productId },
        include: { category: true }
      });

      if (dbProduct) {
      foundProduct = {
        id: dbProduct.id,
        slug: dbProduct.id,
        name: dbProduct.name,
        price: 'Toptan Fiyat Gör', // Always show Toptan Fiyat Gör instead of actual price for B2B
        image: dbProduct.imageUrl || '/emtech-assets/product_1.jpg',
        stock: dbProduct.inStock ? 'Stokta Var' : 'Tükendi',
      };
      categoryTitle = dbProduct.category?.name || "Tüm Ürünler";
      
      const isBattery = categoryTitle.toLowerCase().includes('batarya') || categoryTitle.toLowerCase().includes('power');
      
      if (isBattery) {
        detailedFeatures = [
          { title: "Maksimum Batarya Ömrü", desc: "Yüksek mAh kapasitesi sayesinde cihazınız ilk günkü gibi uzun süre açık kalır, sizi asla yarı yolda bırakmaz." },
          { title: "Orijinal Entegre Uyumu", desc: "Anakart ile %100 uyumlu iletişim kurarak anlık kapanma sorunlarının önüne geçer, stabil bir güç yönetimi sunar." },
          { title: "Güvenli Şarj Teknolojisi", desc: "Aşırı ısınma, yüksek voltaj ve kısa devre koruması ile cihazınızı daima güvende tutar. Isınma problemini minimuma indirir." },
          { title: "Sıfır Döngü Garantisi", desc: "Fabrikadan tamamen sıfır döngü (zero cycle) ile çıkar. Performans kaybı olmayan, taze ve yüksek ömürlü hücrelere sahiptir." },
          { title: "Hızlı Kurulum ve Uyum", desc: "Birebir orijinal ölçülerde üretildiği için kasa içerisine sorunsuz ve kolay montaj imkanı sağlar. Kapak şişme problemleri yaşatmaz." }
        ];
      } else {
        detailedFeatures = [
          { title: "Üstün Görüntü Kalitesi", desc: "Ekranlarımız, yüksek çözünürlük sunarak net ve keskin görüntüler sağlar. Parlak ve canlı renkler, kullanıcı deneyimini bir üst seviyeye taşır." },
          { title: "Yüksek Dokunmatik Performansı", desc: "Gelişmiş dokunmatik panel teknolojisi, hızlı ve hassas bir dokunma deneyimi sağlar. Kullanıcılar, kaydırma, yazma ve diğer tüm işlemleri akıcı bir şekilde gerçekleştirebilir." },
          { title: "Dayanıklı ve Güvenilir Malzeme", desc: "Ekranlar, uzun ömürlü kullanım için üretilmiş ve darbelere karşı dayanıklılığı artırılmıştır. Teknik servislerin ihtiyaçlarını karşılamak üzere üretilen bu ekranlar, cihazların daha uzun süre performans göstermesine olanak tanır." },
          { title: "Uyumluluk Garantisi", desc: "Ürünlerimiz %100 uyumludur. Teknik servislerde sorunsuz montaj yapılabilir ve cihazlarla tam performansla çalışır." },
          { title: "Montaj Kolaylığı", desc: "Profesyonel teknisyenler tarafından rahatlıkla takılabilir ve hızlı montaj süreci sunar. Ekranlar, tam oturumu garanti eden hassas üretimle tasarlanmıştır." }
        ];
      }
    }
    }
  } catch (error) {
    console.error("DB Error:", error);
  }

  // Fallback to mock data if not found in DB
  if (!foundProduct) {
    for (const catKey in categoriesData) {
      const category = categoriesData[catKey as keyof typeof categoriesData];
      const product = category.products.find(p => 
        p.slug === resolvedParams.productId || 
        p.id.toString() === resolvedParams.productId ||
        `${catKey}-${p.id}` === resolvedParams.productId
      );
      
      if (product) {
        foundProduct = product;
        categoryTitle = category.title;
        detailedFeatures = category.detailedFeatures || [];
        break;
      }
    }
  }

  if (!foundProduct) {
    notFound();
  }

  // Extend the found product with its category title for the UI
  const productWithCategory = {
    ...foundProduct,
    categoryTitle,
    detailedFeatures
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1">
        <EmtechProductDetail product={productWithCategory} />
      </div>
      <EmtechFooter />
    </main>
  );
}
