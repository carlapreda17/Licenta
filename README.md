Aplicație pentru a împărți mai rapid facturile între două persoane. SplitScan

Caracteristica principală: Scaner de bonuri care creează o listă de articole cu prețurile lor. După aceea, se primeste lista prezentată și poti glisa în dreapta dacă articolul iti aparține, în stânga dacă este doar al celuilalt sau lăsați neschimbat dacă doriți să împărțiți acest articol. 

Alte caracteristici: posibilitatea de a cumula sau procesa mai multe bonuri

Comportament:
1. Pagina de logare + creare cont + resetare parola
2. Pagina principala - optiune de a poza bonul + de a vizualiza bonuri mai vechi
2.1 Optiune de a poza bonul: 
2.2 se deschide o pagina noua in care pui numele persoanelor cu care imparti factura ( posibil sa fie mai mult de 2) , apoi pozezi bonul si apare lista de glisat (2.3) , dupa glisare se deshide un modal cu sumele fiecaruia

2.4 Vizualizare bonuri mai vechi: se deschide o galerie cu toate pozele salvate si daca apesi pe poza respectiva se vor afisa informatii despre plata facturii si cu cine ai impartit-o (2.5)

 De asemenea, ar putea oferi opțiuni de partajare a listei prin mesaje text, email sau alte platforme de comunicare. (Asta este mai usoara)


+++ Funcție de notificare și partajare: Adăugarea unei funcții care să permită utilizatorilor să trimită notificări sau invitații către cealaltă persoană pentru a vedea și confirma lista cu articole și împărțirea facturii. ( Asta daca mai ramane timp)

Baza de date:

Utilizatori: Conține informațiile utilizatorilor.
UserID: Cheie primară
Username: Șir de caractere pentru numele de utilizator
Password: Șir de caractere pentru parolă (ar trebui să fie hash-uită într-un scenariu real)
Email: Șir de caractere pentru e-mail
Telefon

Factura: Conține bonurile încărcate de utilizatori.
FacturaID: Cheie primară
UserID: Cheie străină care indică utilizatorul ce a încărcat bonul
Image: Calea către fișierul imagine al bonului
Date: Data și ora când a fost încărcat bonul,
Suma_platita_utilizator,
Suma_platita_partener

Items: Conține articolele de pe bon.
ItemID: Cheie primară
FacturaID: Cheie străină care indică bonul căruia îi aparține articolul,
Nume: Numele articolului 
Price: Prețul articolului

PartenerCheltuieli: Contine informatiile despre partenerul de cheltuieli
PartenerId: Cheie primara,
UserId: cheie straina care indica Utilizatorul cu care imparte bonul,
FacturaID: Cheie straina care indica bonul pe care il imparte,
Nume
Mail,
Telefon
