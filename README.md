# react_task1
Referanseoppskrift på alle detaljene finnes på emnets Github-sider

Under "Reference material" på emnets Github side finner du instruksjoner for å hjelpe deg å komme i gang med en ny React applikasjon. For denne øvingen trenger du ikke "Root project" og "Server project".
Applikasjonen skal starte med følgende komponenter. Bruk React Router til å navigere mellom dem:
Forside: Brukeren skal kunne klikke "Ny Quiz" på forsiden
Question: Brukeren skal få et tilfeldig spørsmål
Correct answer: Brukeren skal få tilbakemelding om at de svarte riktig og kunne få et nytt spørsmål
Wrong answer: Brukeren skal få tilbakemelding om at de svarte feil og kunen få et nytt spørsmål
Tips: Question bør se slik ut: <Question question={} onAnswer={handleAnswer} />
Bruk useState for å huske hvilket spørsmål brukeren har fått. Du kan bruke funksjonen randomQuestion i questions.js for å finne et spørsmål og isCorrectAnswer for å sjekke svaret
Legg til Jest i applikasjonen. Se GitHub siden til kurset for tips
Skriv tester som sjekker
Test at Question-komponenten viser spørsmålet og svaralternativ. Bruk expect().toMatchSnapshot()
Test at om når brukeren klikker en svarknapp svarer blir svaret håndter. Bruk find...().props.onClick() for å simulere brukerklikk og jest.fn() og expect(<mock>).toBeCalledWith("...") for å sjekke at riktig funksjon kalles
Bonus:

Bruk Context i stedet for state for spørsmålet
