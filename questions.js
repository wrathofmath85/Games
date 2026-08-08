/* =========================================================================
   TRIVIA TRAIL — QUESTION DATABASE
   Edit this file freely. Each color key holds a list of {q, a} pairs.
   Add as many as you like per category.

     blue   -> The Office: Characters
     pink   -> The Office: Quotes
     yellow -> The Office: Trivia
     green  -> Curb Your Enthusiasm: Characters
     orange -> Curb Your Enthusiasm: Quotes
     purple -> Curb Your Enthusiasm: Trivia

   This file must be loaded BEFORE the game script (index.html already does
   this with <script src="questions.js"></script>).
   ========================================================================= */
window.QUESTIONS = {
  blue: [ // The Office — Characters
    {q:"Who is the Regional Manager of the Scranton branch for most of the series?", a:"Michael Scott"},
    {q:"Which salesman runs a beet farm called Schrute Farms?", a:"Dwight Schrute"},
    {q:"Who is the receptionist that Jim has a long-running crush on?", a:"Pam Beesly"},
    {q:"Who is the frequently ignored HR representative?", a:"Toby Flenderson"},
    {q:"Which temp becomes a corporate exec, dating Angela and Kelly along the way?", a:"Ryan Howard"}
  ],
  pink: [ // The Office — Quotes
    {q:"Complete the quote: 'Bears. Beets. ___'", a:"Battlestar Galactica"},
    {q:"Who says 'I'm not superstitious, but I am a little stitious'?", a:"Michael Scott"},
    {q:"Whose catchphrase is 'That's what she said'?", a:"Michael Scott"},
    {q:"Who yells 'Identity theft is not a joke, Jim!'?", a:"Dwight Schrute"},
    {q:"Complete: 'I... DECLARE... ___!'", a:"Bankruptcy"}
  ],
  yellow: [ // The Office — Trivia
    {q:"In what Pennsylvania city is the main branch located?", a:"Scranton"},
    {q:"What is the full name of the paper company?", a:"Dunder Mifflin Paper Company"},
    {q:"What is the title of Michael's spy screenplay?", a:"Threat Level Midnight"},
    {q:"What is the name of Andy's Cornell a cappella group?", a:"Here Comes Treble"},
    {q:"How many seasons did the US version run?", a:"Nine"}
  ],
  green: [ // Curb Your Enthusiasm — Characters
    {q:"Who created and stars as a fictionalized version of himself?", a:"Larry David"},
    {q:"Who plays Larry's manager and best friend, Jeff Greene?", a:"Jeff Garlin"},
    {q:"Who plays Larry's houseguest-turned-permanent-fixture, Leon Black?", a:"J.B. Smoove"},
    {q:"What is the name of Jeff's sharp-tongued wife?", a:"Susie Greene"},
    {q:"Who plays Larry's wife for much of the series?", a:"Cheryl Hines (as Cheryl)"}
  ],
  orange: [ // Curb Your Enthusiasm — Quotes
    {q:"Complete Larry's signature phrase: 'Pretty, pretty, ___.'", a:"Pretty good"},
    {q:"What does Larry call being cornered into a sidewalk conversation?", a:"A 'stop and chat'"},
    {q:"What term describes cutting a line by pretending to chat with someone in it?", a:"The 'chat and cut'"},
    {q:"What does Larry accuse people of when they take too many free samples?", a:"'Sample abuse'"}
  ],
  purple: [ // Curb Your Enthusiasm — Trivia
    {q:"On what network does the show air?", a:"HBO"},
    {q:"Larry David co-created which classic 1990s sitcom?", a:"Seinfeld"},
    {q:"Most scenes are improvised from what kind of document?", a:"An outline (no full script)"},
    {q:"Which season centers on a 'Seinfeld' cast reunion?", a:"Season 7"}
  ]
};