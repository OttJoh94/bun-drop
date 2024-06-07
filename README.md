För att köra hemsidan:

npm run server
npm run dev

Svårt med att komma på design, tog inspiration från en react-tutorial jag gjort tidigare

Lärorikt med att använda localStorage. Blev samma för cart och user vilket kanske borde refaktoreras.

Ha en tydlig plan direkt vilka komponenter som till exempel behöver komma åt cart. När jag kom på att jag ville att navbaren skulle komma åt det fick jag flytta ut den hela vägen till app.jsx och sedan skicka som prop till alla komponenter. Såg på presentationerna att man kunde använda sig av useContext istället för att skicka allt det som props, så kan man enklare komma åt det i sina komponenter längre in
