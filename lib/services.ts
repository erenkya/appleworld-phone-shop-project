export interface ServiceItem {
  title: string;
  description: string;
  points?: string[];
}

export interface ServiceCategory {
  slug: "satis" | "aksesuar" | "teknik-servis" | "yazilim";
  name: string;
  /** Ana sayfa panelinde görünen kısa açıklama */
  short: string;
  /** Detay sayfası hero açıklaması */
  summary: string;
  image: string;
  imageAlt: string;
  items: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    slug: "satis",
    name: "Cihaz Satış & Takas",
    short:
      "Sıfır kapalı kutu ve mağaza garantili ikinci el cihazlar, değerinde takas ve kurumsal tedarik.",
    summary:
      "En güncel iPhone, iPad ve Apple Watch modellerinden titizlikle test edilmiş ikinci el cihazlara; eski telefonunuzu getirip yenisine anında geçmenizi sağlayan takas desteğine kadar tüm satış süreci mağaza güvencesiyle.",
    image: "/assets/product_color_blueBlack_plus_PC.png",
    imageAlt: "Mavi ve siyah renk seçenekleriyle iPhone",
    items: [
      {
        title: "Sıfır ve kapalı kutu cihazlar",
        description:
          "En güncel iPhone, iPad, Apple Watch ve premium Android modellerinin garantili satışı. Kutu açılışı mağazada birlikte yapılır, faturası elinize verilir.",
        points: [
          "Türkiye garantili, faturalı ürünler",
          "Kutu içeriği ve IMEI kontrolü müşteriyle birlikte",
          "Aynı gün kurulum ve veri aktarımı desteği",
        ],
      },
      {
        title: "İkinci el cihaz alım / satım",
        description:
          "Uzman teknisyenlerimizce 50'den fazla noktadan test edilmiş, batarya sağlığı yüksek, mağaza garantili ikinci el cihazlar.",
        points: [
          "50+ nokta donanım testi ve rapor",
          "Batarya sağlığı %85 ve üzeri cihazlar",
          "Kozmetik durumu şeffaf şekilde derecelendirilir",
          "Mağaza garantisi",
        ],
      },
      {
        title: "Değerinde takas desteği",
        description:
          "Eski telefonunuzu getirin, güncel piyasa değerinden değerlendirip yeni cihazınıza aradaki farkla anında geçin.",
        points: [
          "Anlık ekspertiz ve fiyat teklifi",
          "Fark ödemeyle yeni cihaza geçiş",
          "Eski cihazdaki verinin güvenli silinmesi",
        ],
      },
      {
        title: "Kurumsal çözümler",
        description:
          "Şirketler için toplu cihaz tedariği, kurulum standardizasyonu ve filo yönetimi.",
        points: [
          "Toplu sipariş ve kurumsal faturalandırma",
          "Cihazların ortak profil ile teslimi",
          "Sonraki dönem servis önceliği",
        ],
      },
    ],
  },
  {
    slug: "aksesuar",
    name: "Premium Aksesuar",
    short:
      "MagSafe ve şarj teknolojileri, askeri standart koruma, ekran koruma sistemleri, ses ve araç içi çözümler.",
    summary:
      "Orijinal adaptörlerden askeri standart kılıflara, tozsuz aparatlı ekran koruyucu montajından araç içi MagSafe çözümlerine kadar cihazınızı hem koruyan hem tamamlayan bir aksesuar seçkisi.",
    image: "/assets/Apple-AirPods-hero-240909-lp.jpg.og.jpg",
    imageAlt: "Apple AirPods",
    items: [
      {
        title: "MagSafe ve şarj teknolojileri",
        description:
          "Orijinal Apple adaptörler, MagSafe powerbank'ler, örgülü uzun ömürlü kablolar ve hızlı şarj istasyonları.",
        points: [
          "20W ve üzeri orijinal adaptörler",
          "MagSafe uyumlu taşınabilir bataryalar",
          "Örgülü, kopmaya dirençli USB-C kablolar",
        ],
      },
      {
        title: "Üst düzey koruma",
        description:
          "Askeri standartta düşmeye dayanıklı kılıflar, sararma yapmayan şeffaf kılıflar ve lens koruyucular.",
        points: [
          "MIL-STD 810G düşme testli kılıflar",
          "Sararmaya karşı korumalı şeffaf modeller",
          "Kamera adası için ayrı metal lens koruyucular",
        ],
      },
      {
        title: "Ekran koruma sistemleri",
        description:
          "Toz bırakmayan özel aparatlı montaj, hayalet (gizlilik) ekran koruyucular, safir ve seramik mat camlar.",
        points: [
          "Tozsuz oda mantığıyla aparatlı montaj",
          "Yandan görüşü engelleyen privacy modeller",
          "Parmak izi tutmayan seramik mat seçenek",
        ],
      },
      {
        title: "Ses ve giyilebilir teknoloji",
        description:
          "AirPods serisi, premium Bluetooth kulaklıklar, orijinal Apple Watch kordonları ve akıllı saat aksesuarları.",
        points: [
          "AirPods, AirPods Pro ve Max",
          "Spor, deri ve örgü Apple Watch kordonları",
          "Kulaklık için yedek kulak içi jeller ve kılıflar",
        ],
      },
      {
        title: "Araç içi çözümler",
        description:
          "MagSafe uyumlu araç tutucular, hızlı araç şarjları ve FM transmitter'lar.",
        points: [
          "Havalandırma ve torpido MagSafe tutucular",
          "30W+ çift çıkışlı araç şarjları",
          "Bluetooth FM transmitter modelleri",
        ],
      },
    ],
  },
  {
    slug: "teknik-servis",
    name: "Teknik Servis",
    short:
      "Ekran ve arka cam değişimi, batarya revizyonu, mikroskobik anakart onarımı, Face ID, kamera ve sıvı teması müdahalesi.",
    summary:
      "Kırık ekrandan çöken anakarta, sıvı temasından çalışmayan Face ID'ye kadar her arıza mikroskop altında, doğru ekipmanla ve mümkün olan her yerde orijinal parçayla onarılır. True Tone gibi fabrika özellikleri korunur.",
    image: "/assets/master-uses-driver-unscrew-screws-smartphone-electronic-plates-fix-it-closeup.jpg",
    imageAlt: "Teknisyen tornavida ile telefon anakartındaki vidaları söküyor",
    items: [
      {
        title: "Ekran ve cam değişimi",
        description:
          "Kırık ekranların orijinal ya da A kalite yedek parçalarla, True Tone özelliği kaybolmadan değişimi.",
        points: [
          "Orijinal ve A kalite panel seçeneği",
          "True Tone ve otomatik parlaklık korunur",
          "Değişim sonrası dokunmatik ve renk testi",
        ],
      },
      {
        title: "Batarya revizyonu",
        description:
          "Ömrü tükenen pillerin orijinal kapasiteli pillerle değişimi ve pil sağlığı optimizasyonu.",
        points: [
          "Orijinal kapasiteli hücreler",
          "Pil sağlığı ve döngü sayısı raporu",
          "Şişmiş bataryalarda güvenli söküm",
        ],
      },
      {
        title: "Arka cam ve kasa onarımı",
        description:
          "Özel lazer makineleriyle cihazın içi açılmadan ve hasar vermeden arka cam değişimi.",
        points: [
          "Lazerle yapıştırıcı ayrıştırma",
          "Kasa ve çerçeve düzeltme",
          "MagSafe mıknatıs dizilimi korunur",
        ],
      },
      {
        title: "Anakart ve entegre tamiri",
        description:
          "Şarj entegresi, ses entegresi (audio IC) ve karmaşık anakart arızalarının mikroskobik ortamda onarımı.",
        points: [
          "Mikroskop altında reball ve reflow",
          "Kısa devre ve kaçak akım analizi",
          "Şarj olmama, açılmama, ısınma arızaları",
        ],
      },
      {
        title: "Face ID ve kamera onarımı",
        description:
          "Çalışmayan Face ID modüllerinin kurtarılması, titreyen veya odaklamayan arka kamera lenslerinin değişimi.",
        points: [
          "Dot projektör ve flex onarımı",
          "OIS titreme ve odak sorunları",
          "Ön kamera ve yakınlık sensörü",
        ],
      },
      {
        title: "Sıvı teması müdahalesi",
        description:
          "Su veya sıvı almış cihazların özel solüsyonlarla oksitlenmesinin durdurulması ve veri kurtarma amaçlı ayağa kaldırılması.",
        points: [
          "Ultrasonik temizlik ve oksit giderme",
          "Öncelik: veriye erişimi kurtarmak",
          "Korozyon ilerlemeden hızlı müdahale",
        ],
      },
      {
        title: "Ahize ve hoparlör bakımı",
        description:
          "Sesin az geldiği durumlarda profesyonel solüsyonlarla detaylı hoparlör ve ahize ızgarası temizliği.",
        points: [
          "Toz ve tüy tıkanıklığı temizliği",
          "Görüşmede karşı tarafın az duyması",
          "Gerekirse hoparlör modülü değişimi",
        ],
      },
    ],
  },
  {
    slug: "yazilim",
    name: "Yazılım, Veri & Danışmanlık",
    short:
      "Sıfır veri kaybıyla aktarım, yazılım kurtarma ve güncelleme, profesyonel veri kurtarma, Apple ekosistem eğitimi.",
    summary:
      "Android'den iPhone'a geçişte WhatsApp geçmişi dahil eksiksiz aktarım, Apple logosunda kalan cihazların kurtarılması, yanlışlıkla silinen dosyaların geri getirilmesi ve ilk kez Apple kullananlar için birebir eğitim.",
    image: "/assets/iphone__kqge21l9n26q_og.png",
    imageAlt: "iPhone ekranı",
    items: [
      {
        title: "Güvenli veri aktarımı",
        description:
          "Android'den iOS'a ya da eski cihazdan yeni cihaza, WhatsApp geçmişi dahil sıfır veri kaybıyla eksiksiz aktarım.",
        points: [
          "Rehber, fotoğraf, mesaj ve uygulama verisi",
          "WhatsApp ve WhatsApp Business geçmişi",
          "Aktarım sonrası kontrol listesi",
        ],
      },
      {
        title: "Yazılım kurtarma ve güncelleme",
        description:
          "Apple logosunda kalan, çöken veya açılmayan cihazların yazılımla kurtarılması ve sürüm güncellemeleri.",
        points: [
          "Boot döngüsü ve kurtarma modu çözümleri",
          "Veri korunarak güncelleme denemesi",
          "iOS sürüm yükseltme ve temiz kurulum",
        ],
      },
      {
        title: "Profesyonel veri kurtarma",
        description:
          "Yanlışlıkla silinen fotoğraf, rehber veya dosyaların özel yazılımlarla geri getirilmesi.",
        points: [
          "Silinen medya ve belge taraması",
          "Yedekten seçmeli geri yükleme",
          "Fiziksel arızalı cihazlardan veri çekme",
        ],
      },
      {
        title: "Apple ekosistem eğitimi",
        description:
          "İlk kez iPhone veya Mac kullananlara iCloud yönetimi, Apple ID güvenliği ve cihazın gizli özellikleri hakkında birebir eğitim.",
        points: [
          "iCloud depolama ve yedekleme kurulumu",
          "Apple ID, iki adımlı doğrulama, kurtarma anahtarı",
          "Odak, kısayollar ve gizlilik ayarları",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Teknik servis sürecinin gerçek adımları — burada numaralandırma anlamlı. */
export const repairProcess: { title: string; description: string }[] = [
  {
    title: "Ücretsiz ön arıza tespiti",
    description:
      "Cihaz elinize teslim edilmeden test edilir; arızanın kaynağı ve onarım seçenekleri konuşulur.",
  },
  {
    title: "Net fiyat ve süre onayı",
    description:
      "Parça kalitesi (orijinal / A kalite) ve tahmini teslim süresi yazılı olarak paylaşılır. Onayınız olmadan işleme başlanmaz.",
  },
  {
    title: "Mikroskop altında onarım",
    description:
      "İşlem sırasında True Tone, Face ID ve su direnci gibi fabrika özelliklerini korumak için doğru ekipman kullanılır.",
  },
  {
    title: "Çıkış testi ve garanti",
    description:
      "Onarım sonrası cihaz tüm fonksiyonlarıyla test edilir, yapılan işleme garanti verilir.",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "50+", label: "noktadan ikinci el cihaz testi" },
  { value: "%85+", label: "batarya sağlığı garanti eşiği" },
  { value: "Aynı gün", label: "ekran ve batarya değişimi" },
  { value: "0 ₺", label: "ön arıza tespiti, işlemden önce" },
];
