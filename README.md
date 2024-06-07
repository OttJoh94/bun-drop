För att köra hemsidan:

npm run server
npm run dev

Reflektion:

Strukturen och designen av det här arbetet är inspirerat av en youtube-code-along som jag gjorde på egen hand för att lära mig React. Jag tyckte att den mapp-strukturen som användes där, med att ge varje komponent en mapp som har både en .jsx och .css, var tydlig och gör det lätt att hitta var man stylar allting. Något som inte var med i den videon som jag valde att implementera själv är localStorage. Till en början tyckte jag att localStorage var rätt klumpigt att jobba med, trots att jag använde mig av en custom hook. Min tanke från början var nog att jag skulle både get:a och set:a mycket i min localStorage, men i slutändan blev det mest att jag set:ar när det sker en förändring, och enda gången jag hämtar från min localStorage är när sidan laddas om. Nu i efterhand känns det rätt givet och att det borde ha varit den inställningen jag hade från början.

Det som jag har tyckt har varit jobbigast är att jag inte från början hade tänkt ut vilka komponenter som skulle behöva komma åt vissa states, som cart och signedInUser. Från början låg cart i min FoodDisplay för det var där jag la till i min cart. När jag sedan kom på att jag ville komma åt carten i min Navbar för att kunna göra en liten prick bredvid ikonen för att visa om den är tom eller inte, så försökte jag använda localStorage på krångliga sätt och de uppdaterades inte helt naturligt. Då kom jag på att jag får flytta mitt state till App.jsx så att man kan komma åt den från alla komponenter. Det gör dock att det blir så stökigt av att skicka props genom komponenter som inte alltid behövde den, men det var bara att köra på. Under presentationerna såg jag att Oliver hade använt sig av useContext till det ändamålet och tänkte direkt att om jag skulle göra om det så skulle jag använda mig av det också.

Jag upplever att i det här arbetet har jag varit tvungen att kolla upp mer saker på egen hand jämfört med våra arbeten i de tidigare kurserna. Tidigare så hade man i princip gjort alla delar i slutuppgiften om man hade gjort övningsuppgifterna men nu var det ändå mycket nytt, för man får tänka annorlunda när strukturen blir så stor. Men det har varit lärorikt att leta efter lösningar på egenhand och ibland så fanns det som jag sökte efter som färdiga hooks på StackOverflow som jag kunde använda mig av, t.ex. usePathname och useWindowSize. Så det har ändå fått mig känna mig trygg med att jag kan lösa mina problem på egen hand.

Buggen med att favorites och foodItem inte är helt synkade när jag lägger till något i min cart tappade jag dock motivationen till att försöka lösa när jag kände att arbetet annars i stort sätt var klart... sorry

Stort tack för kursen och ett ännu större tack för alla de här kurserna Albin! All progression är väl genomtänkt och du är grymt pedagogisk!
