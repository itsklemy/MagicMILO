// brumo_premium.js — 5 parcours Brumo avec vraies bifurcations
// Structure : chaque étape a un id, type, content, et next (ou options avec next)

export const brumoPremiumRoutes = [
  // ════════════════════════════════════════════════════════
  // BRUMO P1 — Quand mon cœur bat trop vite
  // ════════════════════════════════════════════════════════
  {
    id: "brumo_p1",
    title: "Quand mon cœur bat trop vite",
    subtitle: "Calmer son corps de l'intérieur",
    magicFormula: "Mon corps m'écoute. Je peux lui parler.",
    moral: "Ton corps n'est pas ton ennemi — il essaie de t'aider.",
    steps: [
      {
        id: "start",
        type: "entity-intro",
        content: "Je sens que quelque chose fait battre ton cœur très fort en ce moment.",
        next: "q1"
      },
      {
        id: "q1",
        type: "question",
        content: "Est-ce que ça s'est passé aujourd'hui ou c'est quelque chose qui revient souvent ?",
        options: [
          { label: "C'était aujourd'hui", next: "q2_today" },
          { label: "Ça revient souvent", next: "q2_often" },
          { label: "Je ne sais pas trop", next: "q2_unsure" }
        ]
      },
      {
        id: "q2_today",
        type: "question",
        content: "Qu'est-ce qui s'est passé aujourd'hui qui t'a fait peur ?",
        options: [
          { label: "Quelque chose à l'école", next: "q3_school" },
          { label: "Quelque chose à la maison", next: "q3_home" },
          { label: "Quelque chose dans ma tête", next: "q3_mind" },
          { label: "Je préfère pas dire", next: "q3_secret" }
        ]
      },
      {
        id: "q2_often",
        type: "question",
        content: "Quand ça revient, c'est plutôt le soir ou ça peut arriver n'importe quand ?",
        options: [
          { label: "Surtout le soir", next: "q3_evening" },
          { label: "N'importe quand", next: "q3_anytime" },
          { label: "Avant des événements", next: "q3_events" }
        ]
      },
      {
        id: "q2_unsure",
        type: "entity-bubble",
        content: "C'est normal de ne pas toujours savoir d'où ça vient. Ton corps, lui, il le sait. On va l'écouter ensemble.",
        next: "body_check"
      },
      {
        id: "q3_school",
        type: "entity-bubble",
        content: "L'école peut mettre beaucoup de pression sur un cœur. Tu n'as pas à tout porter seul.",
        next: "body_check"
      },
      {
        id: "q3_home",
        type: "entity-bubble",
        content: "Ce qui se passe à la maison touche toujours très fort. Je suis là.",
        next: "body_check"
      },
      {
        id: "q3_mind",
        type: "entity-bubble",
        content: "Les pensées dans la tête peuvent faire autant de bruit qu'une vraie situation. Elles sont réelles.",
        next: "body_check"
      },
      {
        id: "q3_secret",
        type: "entity-bubble",
        content: "Tu n'as pas à tout dire. On peut quand même aider ton cœur à ralentir, même sans savoir pourquoi.",
        next: "body_check"
      },
      {
        id: "q3_evening",
        type: "entity-bubble",
        content: "Le soir, le calme fait souvent remonter ce qu'on a mis de côté pendant la journée. C'est courageux de le ressentir.",
        next: "body_check"
      },
      {
        id: "q3_anytime",
        type: "entity-bubble",
        content: "Quand ça arrive n'importe quand, c'est épuisant. Ton corps cherche à t'alerter. On va lui apprendre à souffler.",
        next: "body_check"
      },
      {
        id: "q3_events",
        type: "entity-bubble",
        content: "Anticiper quelque chose de difficile, ça fait battre le cœur fort. C'est de la préparation, pas de la faiblesse.",
        next: "body_check"
      },
      {
        id: "body_check",
        type: "question",
        content: "Là, dans ton corps, qu'est-ce que tu sens le plus ?",
        options: [
          { label: "Le cœur qui bat fort", next: "game_heartbeat" },
          { label: "Le ventre qui se serre", next: "bubble_ventre" },
          { label: "Les mains qui tremblent", next: "bubble_mains" },
          { label: "Tout à la fois", next: "bubble_tout" }
        ]
      },
      {
        id: "bubble_ventre",
        type: "entity-bubble",
        content: "Le ventre sent tout. Il est relié directement à tes émotions. On va le calmer avec le souffle.",
        next: "game_heartbeat"
      },
      {
        id: "bubble_mains",
        type: "entity-bubble",
        content: "Les mains qui tremblent veulent faire quelque chose. On va leur donner une tâche — tapoter doucement.",
        next: "game_heartbeat"
      },
      {
        id: "bubble_tout",
        type: "entity-bubble",
        content: "Quand tout se déclenche en même temps, on commence par une seule chose. Le cœur. Juste le cœur.",
        next: "game_heartbeat"
      },
      {
        id: "game_heartbeat",
        type: "interaction",
        content: "Tapote l'écran au rythme de ta respiration. Ensemble on ralentit — inspire... expire...",
        gameId: "HeartBeat",
        next: "after_game"
      },
      {
        id: "after_game",
        type: "entity-bubble",
        content: "Tu viens de ralentir ton propre cœur. Toi-même. Tu as vu ? C'est toi qui as fait ça.",
        next: "formula"
      },
      {
        id: "formula",
        type: "formula",
        content: "Mon corps m'écoute. Je peux lui parler.",
        next: "action"
      },
      {
        id: "action",
        type: "action",
        content: "Ce soir, pose une main sur ta poitrine. Dis tout bas : on ralentit ensemble. Juste ça.",
        next: null
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // BRUMO P2 — La peur du noir
  // ════════════════════════════════════════════════════════
  {
    id: "brumo_p2",
    title: "La peur du noir",
    subtitle: "Transformer l'obscurité en douceur",
    magicFormula: "Dans le noir, je suis toujours moi. Et je suis en sécurité.",
    moral: "Le noir ne change rien à ce qui est là.",
    steps: [
      {
        id: "start",
        type: "entity-intro",
        content: "Le noir peut faire peur. Beaucoup d'enfants ressentent ça. Et beaucoup d'adultes aussi.",
        next: "q1"
      },
      {
        id: "q1",
        type: "question",
        content: "Quand tu éteins la lumière, qu'est-ce qui se passe d'abord ?",
        options: [
          { label: "Des images arrivent dans ma tête", next: "q2_images" },
          { label: "J'entends des bruits inquiétants", next: "q2_sounds" },
          { label: "Je pense à des choses effrayantes", next: "q2_thoughts" },
          { label: "Je ne sais pas, ça arrive juste", next: "q2_unknown" }
        ]
      },
      {
        id: "q2_images",
        type: "question",
        content: "Ces images, elles viennent d'où selon toi ?",
        options: [
          { label: "D'un film ou d'un jeu", next: "bubble_media" },
          { label: "De mes rêves ou cauchemars", next: "bubble_dreams" },
          { label: "De mon imagination", next: "bubble_imag" }
        ]
      },
      {
        id: "q2_sounds",
        type: "entity-bubble",
        content: "La nuit amplifie les sons. Ce que tu entends existe vraiment — mais ton cerveau lui donne une forme effrayante. On va le rassurer.",
        next: "q3_severity"
      },
      {
        id: "q2_thoughts",
        type: "entity-bubble",
        content: "Les pensées effrayantes choisissent souvent le noir pour arriver. Parce que c'est calme et qu'il n'y a rien d'autre pour les distraire.",
        next: "q3_severity"
      },
      {
        id: "q2_unknown",
        type: "entity-bubble",
        content: "Parfois la peur arrive sans prévenir. Elle n'a pas besoin d'une raison pour être réelle.",
        next: "q3_severity"
      },
      {
        id: "bubble_media",
        type: "entity-bubble",
        content: "Les images des films restent longtemps dans la tête. C'est normal — ton cerveau les a trouvées importantes. On peut lui montrer quelque chose de plus doux.",
        next: "q3_severity"
      },
      {
        id: "bubble_dreams",
        type: "entity-bubble",
        content: "Les cauchemars laissent des traces même éveillé. Ces images ne peuvent pas te faire de mal — elles sont dans ta tête, pas dans ta chambre.",
        next: "q3_severity"
      },
      {
        id: "bubble_imag",
        type: "entity-bubble",
        content: "Une imagination forte, c'est un pouvoir. Elle peut inventer des choses effrayantes, mais elle peut aussi inventer des choses magiques.",
        next: "q3_severity"
      },
      {
        id: "q3_severity",
        type: "question",
        content: "Est-ce que ça t'empêche de dormir vraiment, ou tu finis par t'endormir quand même ?",
        options: [
          { label: "Je m'endors mais c'est difficile", next: "bubble_mild" },
          { label: "Je n'arrive vraiment pas à dormir", next: "bubble_severe" },
          { label: "Je me lève pour appeler quelqu'un", next: "bubble_calls" }
        ]
      },
      {
        id: "bubble_mild",
        type: "entity-bubble",
        content: "Tu y arrives. C'est déjà courageux. On va juste rendre ce moment un peu plus doux.",
        next: "game"
      },
      {
        id: "bubble_severe",
        type: "entity-bubble",
        content: "Ne pas réussir à dormir est épuisant. C'est important d'en parler à un adulte de confiance aussi. Ce soir, essaie ça avec moi d'abord.",
        next: "game"
      },
      {
        id: "bubble_calls",
        type: "entity-bubble",
        content: "Appeler quelqu'un quand on a peur, c'est exactement ce qu'il faut faire. Et ce que tu vas apprendre ce soir peut t'aider avant d'appeler.",
        next: "game"
      },
      {
        id: "game",
        type: "interaction",
        content: "Attrape les étoiles douces. Laisse filer les pensées sombres. Tu choisis ce qui reste.",
        gameId: "StarCatcher",
        next: "after_game"
      },
      {
        id: "after_game",
        type: "entity-bubble",
        content: "Regarde — tu viens de choisir ce que tu gardes. Dans le noir aussi, tu peux choisir sur quoi poser ton attention.",
        next: "formula"
      },
      {
        id: "formula",
        type: "formula",
        content: "Dans le noir, je suis toujours moi. Et je suis en sécurité.",
        next: "action"
      },
      {
        id: "action",
        type: "action",
        content: "Ce soir, cherche une étoile par ta fenêtre ou allume une toute petite lumière. Elle veille avec toi.",
        next: null
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // BRUMO P3 — Quand je me fais trop de souci
  // ════════════════════════════════════════════════════════
  {
    id: "brumo_p3",
    title: "Quand je me fais trop de souci",
    subtitle: "Mettre ses inquiétudes quelque part",
    magicFormula: "Mes soucis ne sont pas plus grands que moi.",
    moral: "Un souci posé quelque part prend moins de place dans la tête.",
    steps: [
      {
        id: "start",
        type: "entity-intro",
        content: "Tes pensées tournent en rond et elles ne s'arrêtent pas ? Je connais ça.",
        next: "q1"
      },
      {
        id: "q1",
        type: "question",
        content: "Ton souci du moment, il concerne qui ou quoi ?",
        options: [
          { label: "Quelqu'un que j'aime", next: "q2_person" },
          { label: "L'école ou les résultats", next: "q2_school" },
          { label: "Quelque chose qui va arriver", next: "q2_future" },
          { label: "Quelque chose que j'ai fait", next: "q2_past" }
        ]
      },
      {
        id: "q2_person",
        type: "question",
        content: "Est-ce que cette personne sait que tu t'inquiètes pour elle ?",
        options: [
          { label: "Non, je lui ai pas dit", next: "bubble_person_no" },
          { label: "Oui, on en a parlé", next: "bubble_person_yes" },
          { label: "Je peux pas lui dire", next: "bubble_person_cant" }
        ]
      },
      {
        id: "q2_school",
        type: "question",
        content: "C'est quoi exactement qui t'inquiète à l'école ?",
        options: [
          { label: "Les notes ou les contrôles", next: "bubble_school_grades" },
          { label: "Les relations avec les autres", next: "bubble_school_social" },
          { label: "Ce que les profs pensent", next: "bubble_school_teachers" }
        ]
      },
      {
        id: "q2_future",
        type: "question",
        content: "Cet événement qui arrive, tu peux faire quelque chose pour le changer ?",
        options: [
          { label: "Oui un peu", next: "bubble_future_yes" },
          { label: "Non pas du tout", next: "bubble_future_no" },
          { label: "Je sais pas", next: "bubble_future_unsure" }
        ]
      },
      {
        id: "q2_past",
        type: "question",
        content: "Ce que tu as fait, est-ce que tu pourrais en parler à quelqu'un ?",
        options: [
          { label: "Oui peut-être", next: "bubble_past_yes" },
          { label: "Non c'est trop difficile", next: "bubble_past_no" },
          { label: "J'ai peur des conséquences", next: "bubble_past_fear" }
        ]
      },
      {
        id: "bubble_person_no",
        type: "entity-bubble",
        content: "S'inquiéter en silence est lourd à porter. Tu n'as pas à tout lui dire — mais toi, tu mérites de poser ce souci quelque part.",
        next: "game"
      },
      {
        id: "bubble_person_yes",
        type: "entity-bubble",
        content: "Tu as déjà fait quelque chose de courageux en en parlant. Ce souci qui reste, mettons-le dans le bocal.",
        next: "game"
      },
      {
        id: "bubble_person_cant",
        type: "entity-bubble",
        content: "Certains soucis semblent trop grands à dire. Mais même posé dans un bocal imaginaire, il pèse moins lourd.",
        next: "game"
      },
      {
        id: "bubble_school_grades",
        type: "entity-bubble",
        content: "Les notes mesurent ce que tu sais à un moment donné — pas ce que tu vaux. C'est différent.",
        next: "game"
      },
      {
        id: "bubble_school_social",
        type: "entity-bubble",
        content: "Les relations à l'école peuvent faire très mal. Tu n'es pas obligé de tout régler seul.",
        next: "game"
      },
      {
        id: "bubble_school_teachers",
        type: "entity-bubble",
        content: "Le regard des adultes compte beaucoup. Mais leur opinion ne dit pas tout sur qui tu es.",
        next: "game"
      },
      {
        id: "bubble_future_yes",
        type: "entity-bubble",
        content: "Alors on peut déjà préparer ce que tu contrôles. Et pour le reste, on le met dans le bocal.",
        next: "game"
      },
      {
        id: "bubble_future_no",
        type: "entity-bubble",
        content: "S'inquiéter de ce qu'on ne contrôle pas est épuisant et inutile — mais très humain. Mettons ce souci ailleurs pour ce soir.",
        next: "game"
      },
      {
        id: "bubble_future_unsure",
        type: "entity-bubble",
        content: "L'incertitude est souvent plus difficile que la chose elle-même. On va mettre cette incertitude dans le bocal.",
        next: "game"
      },
      {
        id: "bubble_past_yes",
        type: "entity-bubble",
        content: "Parler de ce qu'on a fait à quelqu'un de confiance allège toujours. En attendant, pose-le dans le bocal.",
        next: "game"
      },
      {
        id: "bubble_past_no",
        type: "adult-alert",
        title: "Parler à un adulte de confiance",
        content: "Quand quelque chose est trop difficile à porter seul, un adulte de confiance peut vraiment aider. Un parent, un professeur, le médecin — quelqu'un qui peut t'écouter vraiment.",
        next: "game",
        btnLabel: "D'accord, je vais essayer →"
      },
      {
        id: "bubble_past_fear",
        type: "entity-bubble",
        content: "La peur des conséquences est réelle. Mais garder quelque chose de lourd seul est souvent plus difficile que ce qu'on imagine.",
        next: "game"
      },
      {
        id: "game",
        type: "interaction",
        content: "Glisse tes soucis dans le bocal magique. Ferme le couvercle. Ce soir, ils dorment là.",
        gameId: "WorryJar",
        next: "after_game"
      },
      {
        id: "after_game",
        type: "entity-bubble",
        content: "Ils sont là, dans le bocal. Ils existent toujours — mais ils ne sont plus dans ta tête.",
        next: "formula"
      },
      {
        id: "formula",
        type: "formula",
        content: "Mes soucis ne sont pas plus grands que moi.",
        next: "action"
      },
      {
        id: "action",
        type: "action",
        content: "Trouve une petite boîte à la maison. C'est ton bocal à soucis réel. Écris-les et ferme-la.",
        next: null
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // BRUMO P4 — Préparer son courage
  // ════════════════════════════════════════════════════════
  {
    id: "brumo_p4",
    title: "Préparer son courage",
    subtitle: "Construire un bouclier intérieur",
    magicFormula: "J'ai déjà été courageux. Je peux l'être encore.",
    moral: "Le courage ne veut pas dire ne pas avoir peur.",
    steps: [
      {
        id: "start",
        type: "entity-intro",
        content: "Quelque chose de difficile arrive bientôt ? Je peux t'aider à te préparer.",
        next: "q1"
      },
      {
        id: "q1",
        type: "question",
        content: "Qu'est-ce qui arrive bientôt qui te fait peur ?",
        options: [
          { label: "Quelque chose à l'école", next: "q2_school" },
          { label: "Parler devant des gens", next: "q2_speak" },
          { label: "Un changement dans ma vie", next: "q2_change" },
          { label: "Affronter quelqu'un", next: "q2_confront" }
        ]
      },
      {
        id: "q2_school",
        type: "question",
        content: "C'est quoi exactement ?",
        options: [
          { label: "Un contrôle ou examen", next: "bubble_exam" },
          { label: "Une présentation orale", next: "bubble_oral" },
          { label: "Une nouvelle classe ou école", next: "bubble_newschool" }
        ]
      },
      {
        id: "q2_speak",
        type: "entity-bubble",
        content: "Parler devant des gens est l'une des peurs les plus communes. Même les adultes ont encore cette peur. Tu n'es pas seul.",
        next: "q3"
      },
      {
        id: "q2_change",
        type: "entity-bubble",
        content: "Les changements font peur parce qu'on ne sait pas ce qui attend de l'autre côté. Mais tu as déjà traversé des changements avant.",
        next: "q3"
      },
      {
        id: "q2_confront",
        type: "question",
        content: "Est-ce que cet affrontement concerne quelqu'un qui t'a blessé ?",
        options: [
          { label: "Oui, je dois dire quelque chose", next: "bubble_confront_say" },
          { label: "Oui, mais j'ai peur de sa réaction", next: "bubble_confront_fear" },
          { label: "Non, c'est autre chose", next: "q3" }
        ]
      },
      {
        id: "bubble_exam",
        type: "entity-bubble",
        content: "Un contrôle teste ce que tu sais à un moment précis. Pas ce que tu vaux. Ces deux choses sont très différentes.",
        next: "q3"
      },
      {
        id: "bubble_oral",
        type: "entity-bubble",
        content: "L'oral est difficile parce qu'on est visible. Mais les gens dans la salle veulent que ça se passe bien pour toi — pas le contraire.",
        next: "q3"
      },
      {
        id: "bubble_newschool",
        type: "entity-bubble",
        content: "Une nouvelle école, c'est un nouveau départ. Tu y arriveras avec tout ce que tu as déjà appris sur toi-même.",
        next: "q3"
      },
      {
        id: "bubble_confront_say",
        type: "entity-bubble",
        content: "Dire quelque chose d'important à quelqu'un demande beaucoup de courage. Construisons ton bouclier pour ça.",
        next: "q3"
      },
      {
        id: "bubble_confront_fear",
        type: "adult-alert",
        title: "Un adulte peut t'accompagner",
        content: "Si tu as peur de la réaction de quelqu'un, c'est important d'en parler à un adulte de confiance d'abord. Il peut t'aider ou être là avec toi.",
        next: "q3",
        btnLabel: "Je vais en parler à un adulte →"
      },
      {
        id: "q3",
        type: "question",
        content: "Est-ce que tu as déjà vécu quelque chose d'aussi difficile avant, et tu t'en es sorti ?",
        options: [
          { label: "Oui, plusieurs fois", next: "bubble_yes_survivor" },
          { label: "Oui mais c'était différent", next: "bubble_different" },
          { label: "Je me souviens pas", next: "bubble_forgot" },
          { label: "Non, jamais rien d'aussi dur", next: "bubble_first" }
        ]
      },
      {
        id: "bubble_yes_survivor",
        type: "entity-bubble",
        content: "Tu as déjà prouvé que tu peux traverser des choses difficiles. Ce courageux-là est encore en toi.",
        next: "game"
      },
      {
        id: "bubble_different",
        type: "entity-bubble",
        content: "Chaque situation est différente — mais le courage, lui, il grandit. Tu as plus d'expérience qu'avant.",
        next: "game"
      },
      {
        id: "bubble_forgot",
        type: "entity-bubble",
        content: "Le cerveau oublie souvent nos victoires et garde nos peurs. Mais elles ont existé. Tu es encore là.",
        next: "game"
      },
      {
        id: "bubble_first",
        type: "entity-bubble",
        content: "Alors ce sera ton premier bouclier. Il sera d'autant plus fort parce que tu l'as construit toi-même.",
        next: "game"
      },
      {
        id: "game",
        type: "interaction",
        content: "Choisis 3 mots pour ton bouclier. Ils resteront avec toi pendant l'épreuve.",
        gameId: "CourageShield",
        next: "after_game"
      },
      {
        id: "after_game",
        type: "entity-bubble",
        content: "Ton bouclier est prêt. Il est invisible mais il est là. Personne ne peut te l'enlever.",
        next: "formula"
      },
      {
        id: "formula",
        type: "formula",
        content: "J'ai déjà été courageux. Je peux l'être encore.",
        next: "action"
      },
      {
        id: "action",
        type: "action",
        content: "Avant l'épreuve, rappelle-toi tes 3 mots. Dis-les tout bas si tu veux. Ton bouclier s'active.",
        next: null
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // BRUMO P5 — Quand mon corps se bloque
  // ════════════════════════════════════════════════════════
  {
    id: "brumo_p5",
    title: "Quand mon corps se bloque",
    subtitle: "Débloquer son corps avec le souffle",
    magicFormula: "Je souffle et je laisse partir ce qui m'alourdit.",
    moral: "Le souffle est toujours là, même quand tout le reste se fige.",
    steps: [
      {
        id: "start",
        type: "entity-intro",
        content: "Parfois la peur fige tout — les jambes, la voix, les mains. Ça t'est déjà arrivé ?",
        next: "q1"
      },
      {
        id: "q1",
        type: "question",
        content: "Quand ton corps se bloque, qu'est-ce qui se passe d'abord ?",
        options: [
          { label: "Ma voix disparaît", next: "q2_voice" },
          { label: "Mes jambes refusent de bouger", next: "q2_legs" },
          { label: "Ma tête se vide complètement", next: "q2_head" },
          { label: "Tout se bloque en même temps", next: "q2_all" }
        ]
      },
      {
        id: "q2_voice",
        type: "question",
        content: "Ta voix disparaît dans quelle situation surtout ?",
        options: [
          { label: "Devant des gens que je connais pas", next: "bubble_voice_strangers" },
          { label: "Devant la classe", next: "bubble_voice_class" },
          { label: "Quand je dois défendre quelque chose", next: "bubble_voice_defend" }
        ]
      },
      {
        id: "q2_legs",
        type: "entity-bubble",
        content: "Les jambes qui refusent de bouger, c'est le corps qui dit : danger, reste là. Il cherche à te protéger. On va lui montrer qu'on est en sécurité.",
        next: "q3"
      },
      {
        id: "q2_head",
        type: "entity-bubble",
        content: "La tête vide, c'est trop d'informations en même temps. Le cerveau met tout en pause. Le souffle peut le relancer.",
        next: "q3"
      },
      {
        id: "q2_all",
        type: "entity-bubble",
        content: "Quand tout se bloque, le corps demande une seule chose : de l'air. On commence là.",
        next: "q3"
      },
      {
        id: "bubble_voice_strangers",
        type: "entity-bubble",
        content: "Devant des inconnus, le corps passe en mode prudence. Ta voix reviendra quand il se sentira en sécurité.",
        next: "q3"
      },
      {
        id: "bubble_voice_class",
        type: "entity-bubble",
        content: "La classe peut sembler comme une scène où tout le monde regarde. Ce n'est pas un danger réel, mais le corps le ressent comme tel.",
        next: "q3"
      },
      {
        id: "bubble_voice_defend",
        type: "entity-bubble",
        content: "Défendre quelque chose d'important avec des mots, c'est difficile. Ta voix a besoin de ton souffle pour revenir.",
        next: "q3"
      },
      {
        id: "q3",
        type: "question",
        content: "Est-ce que ça t'empêche de faire des choses que tu voudrais faire ?",
        options: [
          { label: "Oui, souvent", next: "bubble_often" },
          { label: "Parfois, mais ça passe", next: "bubble_sometimes" },
          { label: "C'était juste une fois", next: "bubble_once" }
        ]
      },
      {
        id: "bubble_often",
        type: "adult-alert",
        title: "En parler peut vraiment aider",
        content: "Quand le corps se bloque souvent et empêche de vivre normalement, un adulte de confiance — parent, médecin, psychologue — peut vraiment aider. Tu n'as pas à gérer ça seul.",
        next: "game",
        btnLabel: "Je comprends, on continue →"
      },
      {
        id: "bubble_sometimes",
        type: "entity-bubble",
        content: "Le fait que ça passe veut dire que ton corps sait déjà se débloquer. On va juste lui apprendre à le faire plus vite.",
        next: "game"
      },
      {
        id: "bubble_once",
        type: "entity-bubble",
        content: "Une seule fois, c'est déjà précieux d'en parler. Comme ça, si ça revient, tu seras prêt.",
        next: "game"
      },
      {
        id: "game",
        type: "interaction",
        content: "Respire et colorie le ciel avec ton souffle. Chaque expiration apporte une couleur nouvelle.",
        gameId: "ColorBreath",
        next: "after_game"
      },
      {
        id: "after_game",
        type: "entity-bubble",
        content: "Tu viens de créer quelque chose avec ton souffle. Il était là tout le temps — ton souffle ne t'abandonne jamais.",
        next: "formula"
      },
      {
        id: "formula",
        type: "formula",
        content: "Je souffle et je laisse partir ce qui m'alourdit.",
        next: "action"
      },
      {
        id: "action",
        type: "action",
        content: "La prochaine fois que ton corps se bloque — juste un souffle. Un seul. Ça suffit pour commencer.",
        next: null
      }
    ]
  }
];
