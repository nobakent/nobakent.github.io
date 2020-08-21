---
title: "VLAN (Virtual LAN) Nedir? "
author: Didem Çiçek Karaöz
date: 2020-08-21T22:27:46.461Z
---
[Medium Linki](https://medium.com/@didemkaraoz/vlan-virtual-lan-nedir-b9649bd5fbf4)

Varsayılan olarak bir iç ağda, her bilgisayar birbirine ulaşır. **VLAN, aynı switch üzerinde farklı networkler tanımlamayı sağlar.** Yani, eğer bir switch üzerinde, portları gruplandırırsak ve onları gruplu bir şekilde belirli VLAN’lere alırsak, portlar aynı switch üzerinde olmalarına rağmen haberleşemezler. Bu, güvenliği arttırma yollarından bir tanesidir. Ayrıca ağda karışıklığın giderilmesinde önemli bir rol oynar.

<img src="https://miro.medium.com/max/640/0*aWN2DL082etTIgSh.jpg">

Gördüğünüz fotoğrafta switch portları bulunuyor. Varsayılanda bu portların hepsi birbirleriyle haberleşebilirler. Ama biz portları bu şekilde gruplandırıp farklı VLAN’lere alırsak, her VLAN’deki portlar yalnızca kendi aralarında haberleşebilirler. Örnek vermek gerekirse, 3. port ile 13. port haberleşemez. Çünkü 3. port 1. VLAN’de, 13. port ise 4. VLAN’de. Ama 13. port ile 16. port haberleşebilir. Çünkü ikisi de 4. VLAN’de.

**VLAN TİPLERİ**

**Data Vlan:** Kullanıcıların bulunduğu VLAN’dir. Aslında her VLAN bir Data VLAN’dir.

**Default Vlan:** Tüm switch portları varsayılanda bu VLAN’e üyedir.

**Native Vlan:** Trunk hatlarda etiketsiz iletilen VLAN’dir.

**Management Vlan:** Switch’i yönetmek için kullanılan VLAN’dir. Eğer ben, switch’e ip numarası verdiği VLAN’im 1 olsun, diyorsam 1. grup Management VLAN olur.

Aynı switch üzerinden VLAN haberleşmesini yaptırmak oldukça basittir. Ama büyük bir ağda olduğumuzu düşünürsek, işin içine birden fazla switch girecektir. Peki switch’in üzerinde bulunan aynı VLAN numaralı portlar nasıl haberleştirilir?

**VLAN ETİKETLEME (Tagging)**

2 adet switch olduğunu düşünelim. 1 nolu switch’den çıkan frame’in 2 nolu switch’in hangi portuna gideceğinin bilgisine etiketleme denir. Bu teknoloji ile, frame’in içine vlan numarası enjekte edilir. 2. switch frame’i alınca hangi grupta olduğunu öğrenir. Ve frame’den etiket numarasını siler. Çünkü bilgisayar etiketi anlayamaz. Etiketsiz bir şekilde frame, bilgisayara ulaşır.

*“Birden fazla VLAN portunun akabildiği portlara trunk denir. Trunk’ın hangi port olacağına yönetici karar verir. Port trunk olunca, o porttan tek VLAN değil birden çok VLAN taşınabilir.”*

**VLAN KONFİGÜRASYONU VE KONTROLÜ**

<img src="https://miro.medium.com/max/623/0*m1QVU3rWWU9A6F_w.PNG">

VLAN oluşturulmamış bir switch’de **show vlan brief** komutu çalıştırılırsa bu çıktıyı alırız. Görüldüğü gibi switch’in tüm portları default olarak VLAN 1'de.

*“Varsayılanda switch’in tüm data portları VLAN1'e atanmıştır. VLAN 1 silinemez, adı değiştirilemez.”*

Kırmızı ile işaretlenmiş kısım ise, eski teknolojilerin default VLAN’leridir.

VLAN’li Ethernet Frame’i:

<img src="https://miro.medium.com/max/640/0*u_xfKdLRExVzE4Z8.PNG">

Bir Ethernet Frame’i ilk sıradaki gibidir. Hedef ve kaynak MAC adresi, üst katman protokol bilgisi, verisi ve hata kontrolü bulunur. Switchler arasında VLAN iletişimi için, bu Frame’e bir etiket eklenir. Bu yüzden Src MAC ile Type arasına TAG alanı eklenir. Tag alanında görseldeki yeşil alanlar bulunur. 12 bitlik VID (Vlan ID) alanı en fazla 4095 olabilir. Bu da demek oluyor ki, ağımızda en fazla 4095 adet VLAN oluşturabiliriz.

<img src="https://miro.medium.com/max/360/0*_NJJ4lakPHK8N4kd.PNG">

Bu şekilde küçük bir ağımızın olduğunu düşünelim. Normalde PC1, PC2'ye erişebilir. Ama eğer ikisini farklı VLAN’lere alırsak, tıpkı farklı networklerdeymiş gibi birbirlerine erişemezler.

Konfigürasyon şu şekildedir;

<img src="https://miro.medium.com/max/255/0*GIY9GJtchFfj_1HB.PNG">

Önce vlan 10 grubunu oluşturuyoruz. Sonra (config-vlan) moduna geçiliyor. vlan 10'un adını veriyoruz. Eğer isim vermezsek VLAN0010 olarak gözükür.

Altında ise VLAN 20 grubunu oluşturduk. Onun adını ise MISAFIR olarak verdik.

Oluşturulan VLAN’leri kontrol etmek için show vlan komutu kullanılır;

<img src="https://miro.medium.com/max/599/0*eyklS5LmE5nmYRPO.PNG">

Görüldüğü gibi PERSONEL ve MISAFIR VLAN’leri oluşturuldu. İkisi de aktif durumda. Ama bu VLAN’lere henüz herhangi bir portu atamadık. O yüzden tüm portlar hala default VLAN’de. PC1 PC2'ye hala ping atabilir. Çünkü takılı olan portları aynı VLAN’de bulunuyor.

<img src="https://miro.medium.com/max/461/0*7EUe34nrz-ejrmwA.PNG">

Bilgisayarların takılı olduğu portların arayüzlerine girdik. Sonra modunu access olarak ayarladık.

*“Eğer switch’in bir portuna bilgisayar takılıysa aradaki iletişim access olur. Eğer switch takılıysa aradaki iletişim trunk olur.”*

Access olarak biz yapmasaydık zaten Cisco protokolü gereği kendi kendine anlayacaktı. Ama biz sabitledik. Sonra ise içinde olduğumuz portu vlan10'a aldık. Bundan sonra fastEthernet0/1 portu (ona bağlı olarak PC1) vlan10'a yer alıyor. PC1 bundan sonra vlan10 dışında bulunan hiçbir bilgisayara ping atamaz.

Aynısını PC2 için de yapıp kontrol ediyoruz;

<img src="https://miro.medium.com/max/592/0*5BUtWLkt92k3389o.PNG">

Show vlan komutu ile baktığımızda PERSONEL VLAN’ine Fa0/1 portunun, MISAFIR VLAN’ine ise Fa0/2 portunun atandığını görüuyoruz. İki PC arasındaki ping denemesi başarısız olacaktır. Çünkü artık, sanki farklı networklerde gibiler. Halbuki ikisi de 192.168.1.0 ağında bulunuyor. Yani ikisi de aynı iç ağda.

*“show interfaces fastEthernet0/1 komutu ile belirtilen port hakkında ayrıntılı bilgi alınabilir.”*

<img src="https://miro.medium.com/max/640/0*Y6BgRSXFAw6PbMcU.PNG">

Ağ bu şekildeyse aynı konfigürasyonlar Switch2 için de yapılır. **Ama Switch1 ile Switch2 arasındaki modu trunk yapmalısınız.** Ve bu konfigürasyon karşılıklı yapılmalıdır. PC1 ile PC3 aynı VLAN’de bulundukları için iletişim kurabilirler. Ama PC1 PC4'e ping atamaz.

<img src="https://miro.medium.com/max/377/0*b1R_5wsrZ4uj19YY.PNG">

Switchlerden birine bu konfigürasyonu yaparsak, belirtilen vlan’in dışında hiçbir vlan’i geçirmez. Burada Switch1 sadece Vlan 10'u geçirir. Normalde iletişim kurabilen PC2 ve PC4, Vlan 20'de oldukları için artık iletişim kuramazlar.

*“show interfaces f0/1 trunk komutu ile trunk’ın düzgün çalışıp çalışmadığını kontrol edebiliriz.”*

Cisco önceden Vlan’de etiketleme yapmak için ISL (Inter Switch Link) kullanıyordu. Ve 1005 Vlan’i destekliyordu. Günümüzde Cisco etiket için IEEE kullanıyor. Ve 1–1005 arası Vlan’lere Normal Range, 1006–4096 arasına ise Extended Range deniyor. **Normal Range yapılandırmaları switch’de bulunan flash içinde vlan.dat dosyasında saklanır. Extended Range ise NVRAM’de bulunan running config’de saklanır.**

**Trunk yaparken etiketlemenin nasıl olacağını tarif eden protokol IEEE 802.1Q’dur.**

**VLAN’LER ARASI İLETİŞİM**

Eğer Vlan’ler arasında iletişim olmasını istiyorsak (farklı Vlan’ler haberleşsin istiyorsak) araya router konulması gerekmektedir. Router ile switch arası trunk olmalıdır. Yalnız her router trunk bağlantıyı desteklemez.

<img src="https://miro.medium.com/max/525/0*zvM3OFpS_MPfrdDs.PNG">

**PC5'i Vlan 10'a, PC6'yı ise Vlan 20'ye aldığımızı düşünelim. Aralarındaki iletişimi router üzerinden yaptıracağız, tek kablodan Vlan 10 ve Vlan 20 geçecek. Bunun için sanal arayüz (Sub Interface) yaratılır.**

**Tek kablo üzerinden Vlan geçirme işlemine Router-on-a-stick — Inter-Vlan Routing denir. Bu işlem yapılırken bilgisayarların farklı ağlarda olması gerekmektedir.**

Router konfigürasyonu:

**interface gig0/0/0.10 →>10 nolu Vlan için bir sub-interface oluşturduk. Aslında böyle bir arayüz yok. Mantıksal bir arayüz oluşturmuş olduk. Noktadan sonra verdiğiniz numara, encapsulation dot1q komutunda yazdığınız numara ile aynı olmalıdır.
encapsulation dot1q 10 →> Burada dot1q protokolü ile etiketleme yapıyoruz.**

**ip address 10.0.0.1 255.0.0.0 →> Oluşturulan sub-interface’e ip adresi verdik. Eğer gelen etiket 10 olursa (Vlan 10 trafiği gelirse), router’ın 10.0.0.1 ip’li sub-interface’ine gelmiştir.**

Aynı şeyi Vlan 20 için de yapıyoruz.
interface gig0/0/0.20

encapsulation dot1q 20 →> 20 Vlan’i için etiketleme yapıyoruz. Vlan 20 trafiği gelince 20.0.0.1 ip’li sanal arayüze gelmiştir.

ip address 20.0.0.1 255.0.0.0

Böylece konfigürasyon tamamlanmış olur. Unutulmaması gereken şey, bilgisayarların default gateway’ine ilgili router’ın ip’si yazılmalıdır.

PC5'in DG’sine 10.0.0.1, PC6'nın DG’sine 20.0.0.1 yazılmalıdır. Eğer yazılmazsa bilgisayar, hangi router’a gideceğini bilemez. Böylece paket bilgisayardan hiç çıkamaz.

**Switch, frame’i yollarken etiket numarası (Vlan Id) koyar. Router etiketi okur ve etiketi değiştirir. Numarayı hedefteki Vlan’in numarası olarak değiştirir ve routing tablosuna bakıp bunu aynı interface’inden geri yollar. Switch etiket numarasına bakıp hedef Vlan’e frame’i ulaştıracak.**

<img src="https://miro.medium.com/max/551/0*mWdf8ncxAMRxwHcQ.PNG">

Router’ın routing tablosu bu şekildedir. Görüldüğü gibi sanal arayüzler router’a fizikselmiş gibi direkt bağlıdır.

**NATIVE VLAN (ETİKETSİZ VLAN)**

Eğer bir portu trunk yaparsak ve ucuna da Unmanagable (etiketleme özelliği olmayan) switch eklersek, etiketsiz gelen paketlere switch’in nasıl tepki göstereceğini bildirmemiz gerekiyor. Bunun için native vlan kullanılıyor. Olur da etiketsiz bir frame gelirse frame etiketsiz gruba yönlendiriliyor.

**Voice VLANs**

<img src="https://miro.medium.com/max/320/0*686945koS_p3LRKN.PNG">

Telefonların bulunduğu, bağlı olduğu VLAN’e Voice VLAN denir. IP telefonların içinde 3 portlu switch bulunmaktadır. Portlar PC’ye, Switch’e ve Phone ASIC’e (Entegre Devre) bağlanır. IP telefonun içindeki Switch VLAN’i destekler.

Eğer trafik etiketliyse ip telefona, etiketsiz geliyorsa PC’ye iletilir. Bu kararı ASIC verir. Telefon trafiği hassas olduğu için Voice Vlan ile ayrılır.

*“Bir telefonun ses verisinin karşıya ulaşması için 150 milisaniyesi vardır. Eğer 150 milisaniyeyi geçiyorsa iletişim kötüdür.”*

**Tüm vlan.dat dosyası delete flash:vlan.dat komutu ile silinebilir. Vlan’i tek olarak silmek isterseniz, Vlan oluşturma komutunun önüne “no” kelimesini eklemeniz yeterlidir.**

**Son olarak VLAN bize şunları sağlar;**

-Arttırılmış güvenlik

-Maliyeti azaltma

-Yönetim kolaylığı

-Daha iyi performans.
