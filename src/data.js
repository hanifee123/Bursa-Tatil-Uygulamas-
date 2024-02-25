const menu = [
    {
      id: 1,
      title: 'Narlı Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/narli-972017-1-1_large.jpg',
      desc: `Bursa kıyılarının kuzeyde en uç noktasında yer alan plaj, sakin ve huzur dolu atmosferi ile sizi kucaklamakta.
      Plaj uzunluğu 200 metre ve genişliği ise 5 metredir. `,
    },
    {
      id: 2,
      title: 'Büyük Kumla Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://seyyahdefteri.com/wp-content/uploads/2021/11/Buyukkumla-Kucukkumla-Halk-Plajlari-.webp',
      desc: `Şezlong & Şemsiye ücretsiz kullanabiliyorsunuz. Büyük ve Küçük Kumla Plajı olarak 2 farklı yerde denize girebilirsiniz.
      Plaj uzunluğu 210 metre ve ortalama plaj genişliği 25 metredir.`,
    },
    {
      id: 3,
      title: 'Küçük Kumla Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/kkumla2_large.jpg',
      desc: `Çınar ağaçları altındaki geniş yürüyüş yolları ve gece gündüz kullanımı ile en hareketli plajlarımızdan…
      Plaj uzunluğu 1200 metre ve ortalama plaj genişliği 10 metre olan Küçükkumla Halk Plajı, Bursa'nın en güzel plajlarındandır.`,
    },
    {
      id: 4,
      title: 'Gemsaz Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/gemsaz_large.jpg',
      desc: `Gemlik’in sakin ve huzurlu plajı…
      Plaj uzunluğu 1000 metre ve ortalama plaj genişliği 30 metre olan Gemsaz Halk Plajı'nda yeme-içme mekanlarından da yararlanabilirsiniz.`,
    },
    {
      id: 5,
      title: 'Kumsaz Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/kumsazpanorama-1_large.jpg',
      desc: `Sazlıklar arasından ulaştığınız plajın palmiyelerle kaplı geniş kumsalında ve sosyal tesis ayrıcalığıyla deniz keyfi yapabilirsiniz…
      Bursa'nın Gemlik ilçesinde yer alan Kumsaz Halk Plajı'nın uzunluğu 1040 metre ve genişliği 50 metre'dir. Bursa merkeze uzaklığı 40 km'dir.`,
    },
    {
      id: 6,
      title: 'Kurşunlu Halk Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/adsiz_large.jpg',
      desc: `Kurşunlu merkezinde yer alan plajda, güneş ve denizin tadını çıkarın...
      Uzunluğu 3600 metre ve genişliği 5 metre olan Kurşunlu Halk Plajı'nda, duş kabinleri ve yeme-içme tesisleri bulunmaktadır.`,
    },
    {
      id: 7,
      title: 'Kurşunlu Kadınlar Plajı',
      category: 'gemlik',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/kadinlar-plaji2-1_large.jpg',
      desc: `Bursa’nın ilk ve tek hanımlara özel plajı olan Kurşunlu Kadınlar Plajı'nın uzunluğı 130 metre ve genişliği 10 metre'dir.
      Plajda; soyunma kabinleri, duş alanları, yeme-içme noktası, acil ilk yardım bölgesi ve WC. mevcuttur.`,
    },
    {
      id: 8,
      title: 'Yeniköy Halk Plajı',
      category: 'karacabey',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/015_karacabey-plaji_large.jpg',
      desc: `Longoz ormanlarıyla bütünleşen, kumullarla, kum zambaklarıyla kaplı sahillerde yer alan plaj...
      Uzunluğu 1950 metre ve genişliği ortalama 100 metre olan Yeniköy Halk Plajı'nda; Park alanı,
      yeme-içme mekanları, ilk yardım alanları, kabinler, wc. gibi sizler için birçok imkan barındırıyor.`,
    },
    {
      id: 9,
      title: 'Malkara Halk Plajı',
      category: 'karacabey',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/003_malkara-plaji_large.jpg',
      desc: `Ihlamur ve defne kokulu ormanlarla denizin buluştuğu plaj…
      Uzunluğu 2150 metre ve genişliği 30 metre olan Malkara Halk Plajı'nda; yeme-içme mekanları, duş alanları,
      soyunma kabinleri, WC., araç park alanı gibi yararlanabileceğiniz birçok hizmet sunulmaktadır.`,
    },
    {
      id: 10,
      title: 'Kurşunlu Halk Plajı',
      category: 'karacabey',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/kursunlu-plaji-1_large.jpg',
      desc: `Ihlamur ve defne kokulu ormanlarla denizin buluştuğu plaj…
      Uzunluğu 2050 metre ve ortalama genişliği 15 metre olan Kurşunlu Halk Plajı'nda; araç park alanları, restoranlar, duş alanları,
      ilk yardım bölgeleri, soyunma kabinleri, cankurtaran gibi yararlanabileceğiniz birçok imkan mevcuttur.`,
    },
    {
      id: 11,
      title: 'Altıntaş Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/altintas-1_large.jpg',
      desc: `Köy evlerinin arasında, balıkçı ağları çekilirken siz de denizin keyfine varın…
      Uzunluğu 1350 metre ve genişliği 10 metre olan Altıntaş Halk Plajı'nda yeme-içme tesisleri ve duş alabileceğiniz alanlar mevcuttur.`,
    },
    {
      id: 12,
      title: 'Altınkum Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/017_burgaz-altinkum-halk-plaji_large.jpg',
      desc: `Adı gibi altın sarısı kumlarla kaplı plajında yüzmenin keyfini yaşayın...
      Uzunluğu 1350 metre ve genişliği 10 metre olan Altınkum Halk Plajı'nda; yeme-içme mekanları, duş alanları,
      ilk yardım alanları gibi misafirlerin yararlanabilecekleri yerler vardır.`,
    },
    {
      id: 13,
      title: 'Güzelyalı Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/burgaz-2_large.jpg',
      desc: `Dalgalarla ve yunuslarla birlikte yüzmenin keyfine varacağınız plaj…
      Uzunluğu 2250 metre ve ortalama genişliği 5 metre olan Güzelyalı (Burgaz) Halk Plajı'nda; 
      WC., duş yerleri, acil durum müdahale yeri, yeme-içme mekanları mevcuttur.`,
    },
    {
      id: 14,
      title: 'Kumyaka Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/030_kumyaka-marina_large.jpg',
      desc: `Zeytin ağaçlarının denize uzandığı sakin ve huzurlu plaj…
      Uzunluğu 85 metre ve genişliği 10 metre olan Kumyaka Halk Plaıjı'nda; duş alanları, ilk yardım bölgesi, cankurtaran ve yeme-içme tesisleri
      bulunmaktadır.Ayrıca, Kumyaka'da denizin keyfini çıkarırken köyü de gezebilirsiniz. Dünya'nın ayakta kalmış en eski üçüncü kilisesine de ev
      sahipliği yapan bu tarihi köy, bozulmamış doğal güzelliği, masmavi denizi ve eski Rum evleriyle görülmesi gereken yerlerden biri.
      Mandalina, portakal ve limon ağaçlarıyla süslü bahçeleri Bursa'da sadece burada görebilirsiniz.`,
    },
    {
      id: 15,
      title: 'Tirilye Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://th.bing.com/th/id/OIP.9EVMXGUyL5EcFHi5TPPs1QHaGd?rs=1&pid=ImgDetMain',
      desc: `Tarihle ve zeytin ağaçlarıyla bütünleşen plaj…
      Uzunluğu 460 metre ve genişliği 15 metre olan Tirilye (Zeytinbağı) Halk Plajı'nda; duş alanları, WC., soyunma odaları,
      ilk yardım bölgesi ve çevresinde Tirilye'nin kendine has mezelerinin servis edildiği balık restoranları bulunmaktadır.`,
    },
    {
      id: 16,
      title: 'Eşkel Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/eskel-sahili-2_large.jpg',
      desc: `İnce kumuyla, ailelerin tercihi gözde plaj olan Eşkel (Esence) Halk Plajı, 1200 metre uzunluğa ve ortalama 35 metre plaj genişliğine sahiptir. 
      Plajda; duş kabinleri, soyunma kabinleri, WC., cankurtaran, park yeri ve yeme-içme mekanları mevcuttur.`,
    },
    {
      id: 17,
      title: 'Eğerce Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/egerce-872017-1_large.jpg',
      desc: `Geniş ve uzun sahili ve sarı kumlarıyla güneşi hissedebileceğiniz plaj...
      Plaj Uzunluğu 1000 metre ve Ortalama Plaj Genişliği 30 metre'dir.`,
    },
    {
      id: 18,
      title: 'Mesudiye Halk Plajı',
      category: 'mudanya',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/mesudiye-872017-10_large.jpg',
      desc: `Plajımızda sakin ve huzurlu bir deniz keyfi…
      Plaj Uzunluğu 1200 metre ve Ortalama Plaj Genişliği 50 metre'dir.`,
    },
    {
      id: 19,
      title: 'Orhangazi Halk Plajı',
      category: 'orhangazi',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/orhangazi-plaji-1_large.jpg',
      desc: `Çam ormanıyla bütünleşen gölde tatil keyfini yaşayın…
      Uzunluğu 1825 metre ve ortalama genişliği 30 metre olan Orhangazi Halk Plajı'nda; yeme-içme için restoranlar,
      özellikle balık restoranları, ilk yardım bölgesi ve tekne turu mevcuttur.`,
    },
    {
      id: 20,
      title: 'İnciraltı Halk Plajı',
      category: 'orhangazi',
      price: 0,
      img: 'https://www.gotobursa.com.tr/uploads/2022/08/31880_mtyyzwnmm2_large.jpg',
      desc: `Uzunluğu 1000 metre ve genişliği 5 metre olan İznik İnciraltı Halk Plajı, Bursa'nın ilk ve tek 'Mavi Bayraklı plajı' dır. 
      Bu plajda, gün boyu gölün keyfini yaşadıktan sonra dünyanın en güzel günbatımlarından birisini izleyebilirsiniz.`,
    },
  
  ];
  export default menu;