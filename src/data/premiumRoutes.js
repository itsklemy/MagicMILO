export const premiumRoutes = {

  brumo: [
    {
      id: "brumo_p1",
      title: "Quand mon cœur bat trop vite",
      subtitle: "Calmer son corps de l'intérieur",
      magicFormula: "Mon corps m'écoute. Je peux lui parler.",
      steps: [
        { id: "start", type: "entity-intro", content: "Je sens que quelque chose fait battre ton cœur très fort en ce moment.", next: "q1" },
        { id: "q1", type: "question", content: "Est-ce que ça s'est passé aujourd'hui ou c'est quelque chose qui revient souvent ?", options: [
          { label: "C'était aujourd'hui", next: "q2_today" },
          { label: "Ça revient souvent", next: "q2_often" },
          { label: "Je ne sais pas trop", next: "q2_unsure" }
        ]},
        { id: "q2_today", type: "question", content: "Qu'est-ce qui s'est passé aujourd'hui ?", options: [
          { label: "Quelque chose à l'école", next: "bubble_school" },
          { label: "Quelque chose à la maison", next: "bubble_home" },
          { label: "Quelque chose dans ma tête", next: "bubble_mind" },
          { label: "Je préfère pas dire", next: "bubble_secret" }
        ]},
        { id: "q2_often", type: "question", content: "Ça revient plutôt le soir ou n'importe quand ?", options: [
          { label: "Surtout le soir", next: "bubble_evening" },
          { label: "N'importe quand", next: "bubble_anytime" },
          { label: "Avant des événements", next: "bubble_events" }
        ]},
        { id: "q2_unsure", type: "entity-bubble", content: "C'est normal de ne pas savoir d'où ça vient. Ton corps, lui, il le sait. On va l'écouter ensemble.", next: "body_check" },
        { id: "bubble_school", type: "entity-bubble", content: "L'école peut mettre beaucoup de pression sur un cœur. Tu n'as pas à tout porter seul.", next: "body_check" },
        { id: "bubble_home", type: "entity-bubble", content: "Ce qui se passe à la maison touche toujours très fort. Je suis là.", next: "body_check" },
        { id: "bubble_mind", type: "entity-bubble", content: "Les pensées dans la tête peuvent faire autant de bruit qu'une vraie situation. Elles sont réelles.", next: "body_check" },
        { id: "bubble_secret", type: "entity-bubble", content: "Tu n'as pas à tout dire. On peut quand même aider ton cœur à ralentir.", next: "body_check" },
        { id: "bubble_evening", type: "entity-bubble", content: "Le soir, le calme fait remonter ce qu'on a mis de côté pendant la journée. C'est courageux de le ressentir.", next: "body_check" },
        { id: "bubble_anytime", type: "entity-bubble", content: "Quand ça arrive n'importe quand, c'est épuisant. Ton corps cherche à t'alerter. On va lui apprendre à souffler.", next: "body_check" },
        { id: "bubble_events", type: "entity-bubble", content: "Anticiper quelque chose de difficile fait battre le cœur fort. C'est de la préparation, pas de la faiblesse.", next: "body_check" },
        { id: "body_check", type: "question", content: "Là, dans ton corps, qu'est-ce que tu sens le plus ?", options: [
          { label: "Le cœur qui bat fort", next: "game" },
          { label: "Le ventre qui se serre", next: "bubble_ventre" },
          { label: "Les mains qui tremblent", next: "bubble_mains" },
          { label: "Tout à la fois", next: "bubble_tout" }
        ]},
        { id: "bubble_ventre", type: "entity-bubble", content: "Le ventre est relié directement à tes émotions. On va le calmer avec le souffle.", next: "game" },
        { id: "bubble_mains", type: "entity-bubble", content: "Les mains qui tremblent veulent faire quelque chose. On va leur donner une tâche — tapoter doucement.", next: "game" },
        { id: "bubble_tout", type: "entity-bubble", content: "Quand tout se déclenche, on commence par une seule chose. Le cœur. Juste le cœur.", next: "game" },
        { id: "game", type: "interaction", content: "Tapote l'écran au rythme de ta respiration. Inspire... expire... ensemble on ralentit.", gameId: "HeartBeat", next: "after_game" },
        { id: "after_game", type: "entity-bubble", content: "Tu viens de ralentir ton propre cœur. Toi-même. Tu as vu ? C'est toi qui as fait ça.", next: "formula" },
        { id: "formula", type: "formula", content: "Mon corps m'écoute. Je peux lui parler.", next: "action" },
        { id: "action", type: "action", content: "Ce soir, pose une main sur ta poitrine. Dis tout bas : on ralentit ensemble. Juste ça.", next: null }
      ]
    },
    {
      id: "brumo_p2",
      title: "La peur du noir",
      subtitle: "Transformer l'obscurité en douceur",
      magicFormula: "Dans le noir, je suis toujours moi. Et je suis en sécurité.",
      steps: [
        { id: "start", type: "entity-intro", content: "Le noir peut faire peur. Beaucoup d'enfants ressentent ça. Et beaucoup d'adultes aussi.", next: "q1" },
        { id: "q1", type: "question", content: "Quand tu éteins la lumière, qu'est-ce qui se passe d'abord ?", options: [
          { label: "Des images arrivent dans ma tête", next: "q2_images" },
          { label: "J'entends des bruits inquiétants", next: "bubble_sounds" },
          { label: "Je pense à des choses effrayantes", next: "bubble_thoughts" },
          { label: "Ça arrive juste, sans raison", next: "bubble_unknown" }
        ]},
        { id: "q2_images", type: "question", content: "Ces images, elles viennent d'où selon toi ?", options: [
          { label: "D'un film ou d'un jeu", next: "bubble_media" },
          { label: "De mes rêves ou cauchemars", next: "bubble_dreams" },
          { label: "De mon imagination", next: "bubble_imag" }
        ]},
        { id: "bubble_sounds", type: "entity-bubble", content: "La nuit amplifie les sons. Ton cerveau leur donne une forme effrayante. On va le rassurer.", next: "q_severity" },
        { id: "bubble_thoughts", type: "entity-bubble", content: "Les pensées effrayantes choisissent le noir parce qu'il n'y a rien d'autre pour les distraire.", next: "q_severity" },
        { id: "bubble_unknown", type: "entity-bubble", content: "La peur n'a pas besoin d'une raison pour être réelle. On va l'apprivoiser ensemble.", next: "q_severity" },
        { id: "bubble_media", type: "entity-bubble", content: "Les images des films restent longtemps dans la tête. On peut leur montrer quelque chose de plus doux.", next: "q_severity" },
        { id: "bubble_dreams", type: "entity-bubble", content: "Les cauchemars laissent des traces éveillé. Ces images ne peuvent pas te faire de mal — elles sont dans ta tête, pas dans ta chambre.", next: "q_severity" },
        { id: "bubble_imag", type: "entity-bubble", content: "Une imagination forte est un pouvoir. Elle peut inventer des choses effrayantes — et aussi des choses magiques.", next: "q_severity" },
        { id: "q_severity", type: "question", content: "Est-ce que ça t'empêche de dormir vraiment, ou tu finis par t'endormir quand même ?", options: [
          { label: "Je m'endors mais c'est difficile", next: "bubble_mild" },
          { label: "Je n'arrive vraiment pas à dormir", next: "bubble_severe" },
          { label: "Je me lève pour appeler quelqu'un", next: "bubble_calls" }
        ]},
        { id: "bubble_mild", type: "entity-bubble", content: "Tu y arrives. C'est déjà courageux. On va juste rendre ce moment un peu plus doux.", next: "game" },
        { id: "bubble_severe", type: "adult-alert", title: "Parler à un adulte peut aider", content: "Quand on n'arrive vraiment pas à dormir à cause de la peur, un adulte de confiance peut vraiment aider. Un parent, un médecin — quelqu'un qui peut t'écouter.", next: "game", btnLabel: "D'accord, on continue →" },
        { id: "bubble_calls", type: "entity-bubble", content: "Appeler quelqu'un quand on a peur, c'est exactement ce qu'il faut faire. Ce que tu vas apprendre peut t'aider avant d'appeler.", next: "game" },
        { id: "game", type: "interaction", content: "Attrape les étoiles douces. Laisse filer les pensées sombres. Tu choisis ce qui reste dans ta tête.", gameId: "StarCatcher", next: "after_game" },
        { id: "after_game", type: "entity-bubble", content: "Dans le noir aussi, tu peux choisir sur quoi poser ton attention. Tu viens de le faire.", next: "formula" },
        { id: "formula", type: "formula", content: "Dans le noir, je suis toujours moi. Et je suis en sécurité.", next: "action" },
        { id: "action", type: "action", content: "Ce soir, cherche une étoile par ta fenêtre ou allume une toute petite lumière. Elle veille avec toi.", next: null }
      ]
    },
    {
      id: "brumo_p3",
      title: "Quand je me fais trop de souci",
      subtitle: "Mettre ses inquiétudes quelque part",
      magicFormula: "Mes soucis ne sont pas plus grands que moi.",
      steps: [
        { id: "start", type: "entity-intro", content: "Tes pensées tournent en rond et elles ne s'arrêtent pas ? Je connais ça.", next: "q1" },
        { id: "q1", type: "question", content: "Ton souci du moment, il concerne quoi ?", options: [
          { label: "Quelqu'un que j'aime", next: "q2_person" },
          { label: "L'école ou les résultats", next: "q2_school" },
          { label: "Quelque chose qui va arriver", next: "q2_future" },
          { label: "Quelque chose que j'ai fait", next: "q2_past" }
        ]},
        { id: "q2_person", type: "question", content: "Est-ce que cette personne sait que tu t'inquiètes pour elle ?", options: [
          { label: "Non, je lui ai pas dit", next: "bubble_person_no" },
          { label: "Oui, on en a parlé", next: "bubble_person_yes" },
          { label: "Je peux pas lui dire", next: "bubble_person_cant" }
        ]},
        { id: "q2_school", type: "question", content: "C'est quoi exactement qui t'inquiète à l'école ?", options: [
          { label: "Les notes ou les contrôles", next: "bubble_grades" },
          { label: "Les relations avec les autres", next: "bubble_social" },
          { label: "Ce que les profs pensent de moi", next: "bubble_teachers" }
        ]},
        { id: "q2_future", type: "question", content: "Cet événement qui arrive, tu peux faire quelque chose pour le changer ?", options: [
          { label: "Oui un peu", next: "bubble_future_yes" },
          { label: "Non pas du tout", next: "bubble_future_no" },
          { label: "Je sais pas", next: "bubble_future_unsure" }
        ]},
        { id: "q2_past", type: "question", content: "Est-ce que tu peux en parler à quelqu'un ?", options: [
          { label: "Oui peut-être", next: "bubble_past_yes" },
          { label: "Non c'est trop difficile", next: "adult_alert" },
          { label: "J'ai peur des conséquences", next: "bubble_past_fear" }
        ]},
        { id: "bubble_person_no", type: "entity-bubble", content: "S'inquiéter en silence est lourd à porter. Tu mérites de poser ce souci quelque part.", next: "game" },
        { id: "bubble_person_yes", type: "entity-bubble", content: "Tu as déjà fait quelque chose de courageux en en parlant. Ce souci qui reste, mettons-le dans le bocal.", next: "game" },
        { id: "bubble_person_cant", type: "entity-bubble", content: "Certains soucis semblent trop grands à dire. Posé dans un bocal, il pèse moins lourd.", next: "game" },
        { id: "bubble_grades", type: "entity-bubble", content: "Les notes mesurent ce que tu sais à un moment donné — pas ce que tu vaux. C'est différent.", next: "game" },
        { id: "bubble_social", type: "entity-bubble", content: "Les relations à l'école peuvent faire très mal. Tu n'es pas obligé de tout régler seul.", next: "game" },
        { id: "bubble_teachers", type: "entity-bubble", content: "Le regard des adultes compte beaucoup. Mais leur opinion ne dit pas tout sur qui tu es.", next: "game" },
        { id: "bubble_future_yes", type: "entity-bubble", content: "On peut déjà préparer ce que tu contrôles. Et pour le reste, on le met dans le bocal.", next: "game" },
        { id: "bubble_future_no", type: "entity-bubble", content: "S'inquiéter de ce qu'on ne contrôle pas est épuisant. Mettons ce souci ailleurs pour ce soir.", next: "game" },
        { id: "bubble_future_unsure", type: "entity-bubble", content: "L'incertitude est souvent plus difficile que la chose elle-même. On va la mettre dans le bocal.", next: "game" },
        { id: "bubble_past_yes", type: "entity-bubble", content: "Parler de ce qu'on a fait allège toujours. En attendant, pose-le dans le bocal.", next: "game" },
        { id: "adult_alert", type: "adult-alert", title: "Parler à un adulte de confiance", content: "Quand quelque chose est trop difficile à porter seul, un adulte de confiance peut vraiment aider — un parent, un professeur, le médecin scolaire.", next: "game", btnLabel: "D'accord, je vais essayer →" },
        { id: "bubble_past_fear", type: "entity-bubble", content: "La peur des conséquences est réelle. Mais garder quelque chose de lourd seul est souvent encore plus difficile.", next: "game" },
        { id: "game", type: "interaction", content: "Glisse tes soucis dans le bocal magique. Ferme le couvercle. Ce soir, ils dorment là.", gameId: "WorryJar", next: "after_game" },
        { id: "after_game", type: "entity-bubble", content: "Ils existent toujours — mais ils ne sont plus dans ta tête. Tu as fait de la place.", next: "formula" },
        { id: "formula", type: "formula", content: "Mes soucis ne sont pas plus grands que moi.", next: "action" },
        { id: "action", type: "action", content: "Trouve une petite boîte à la maison. Écris tes soucis et ferme-la. C'est ton bocal réel.", next: null }
      ]
    },
    {
      id: "brumo_p4",
      title: "Préparer son courage",
      subtitle: "Construire un bouclier intérieur",
      magicFormula: "J'ai déjà été courageux. Je peux l'être encore.",
      steps: [
        { id: "start", type: "entity-intro", content: "Quelque chose de difficile arrive bientôt ? Je peux t'aider à te préparer.", next: "q1" },
        { id: "q1", type: "question", content: "Qu'est-ce qui arrive bientôt qui te fait peur ?", options: [
          { label: "Un contrôle ou examen", next: "bubble_exam" },
          { label: "Parler devant des gens", next: "bubble_speak" },
          { label: "Un grand changement", next: "bubble_change" },
          { label: "Affronter quelqu'un", next: "q2_confront" }
        ]},
        { id: "bubble_exam", type: "entity-bubble", content: "Un contrôle teste ce que tu sais à un moment précis. Pas ce que tu vaux. Ces deux choses sont très différentes.", next: "q_survivor" },
        { id: "bubble_speak", type: "entity-bubble", content: "Parler devant des gens est l'une des peurs les plus communes. Même les adultes l'ont encore. Tu n'es pas seul.", next: "q_survivor" },
        { id: "bubble_change", type: "entity-bubble", content: "Les changements font peur parce qu'on ne sait pas ce qui attend de l'autre côté. Mais tu as déjà traversé des changements.", next: "q_survivor" },
        { id: "q2_confront", type: "question", content: "Est-ce que cet affrontement concerne quelqu'un qui t'a blessé ?", options: [
          { label: "Oui, je dois dire quelque chose", next: "bubble_confront" },
          { label: "Oui, j'ai peur de sa réaction", next: "adult_confront" },
          { label: "Non, c'est autre chose", next: "q_survivor" }
        ]},
        { id: "bubble_confront", type: "entity-bubble", content: "Dire quelque chose d'important à quelqu'un demande beaucoup de courage. Construisons ton bouclier pour ça.", next: "q_survivor" },
        { id: "adult_confront", type: "adult-alert", title: "Un adulte peut t'accompagner", content: "Si tu as peur de la réaction de quelqu'un, parle-en d'abord à un adulte de confiance. Il peut t'aider ou être là avec toi.", next: "q_survivor", btnLabel: "Je vais en parler →" },
        { id: "q_survivor", type: "question", content: "Est-ce que tu as déjà vécu quelque chose d'aussi difficile et tu t'en es sorti ?", options: [
          { label: "Oui, plusieurs fois", next: "bubble_yes" },
          { label: "Oui mais c'était différent", next: "bubble_different" },
          { label: "Non, jamais rien d'aussi dur", next: "bubble_first" }
        ]},
        { id: "bubble_yes", type: "entity-bubble", content: "Tu as déjà prouvé que tu peux traverser des choses difficiles. Ce courageux-là est encore en toi.", next: "game" },
        { id: "bubble_different", type: "entity-bubble", content: "Chaque situation est différente — mais le courage, lui, il grandit. Tu as plus d'expérience qu'avant.", next: "game" },
        { id: "bubble_first", type: "entity-bubble", content: "Alors ce sera ton premier bouclier. Il sera d'autant plus fort parce que tu l'as construit toi-même.", next: "game" },
        { id: "game", type: "interaction", content: "Choisis 3 mots pour ton bouclier. Ils resteront avec toi pendant l'épreuve.", gameId: "CourageShield", next: "after_game" },
        { id: "after_game", type: "entity-bubble", content: "Ton bouclier est prêt. Il est invisible mais il est là. Personne ne peut te l'enlever.", next: "formula" },
        { id: "formula", type: "formula", content: "J'ai déjà été courageux. Je peux l'être encore.", next: "action" },
        { id: "action", type: "action", content: "Avant l'épreuve, rappelle-toi tes 3 mots. Dis-les tout bas. Ton bouclier s'active.", next: null }
      ]
    },
    {
      id: "brumo_p5",
      title: "Quand mon corps se bloque",
      subtitle: "Débloquer son corps avec le souffle",
      magicFormula: "Je souffle et je laisse partir ce qui m'alourdit.",
      steps: [
        { id: "start", type: "entity-intro", content: "Parfois la peur fige tout — les jambes, la voix, les mains. Ça t'est déjà arrivé ?", next: "q1" },
        { id: "q1", type: "question", content: "Quand ton corps se bloque, qu'est-ce qui se passe d'abord ?", options: [
          { label: "Ma voix disparaît", next: "q2_voice" },
          { label: "Mes jambes refusent de bouger", next: "bubble_legs" },
          { label: "Ma tête se vide complètement", next: "bubble_head" },
          { label: "Tout se bloque en même temps", next: "bubble_all" }
        ]},
        { id: "q2_voice", type: "question", content: "Ta voix disparaît dans quelle situation surtout ?", options: [
          { label: "Devant des gens que je connais pas", next: "bubble_strangers" },
          { label: "Devant la classe", next: "bubble_class" },
          { label: "Quand je dois défendre quelque chose", next: "bubble_defend" }
        ]},
        { id: "bubble_legs", type: "entity-bubble", content: "Les jambes qui refusent de bouger, c'est le corps qui dit : danger, reste là. Il cherche à te protéger.", next: "q_frequency" },
        { id: "bubble_head", type: "entity-bubble", content: "La tête vide, c'est trop d'informations en même temps. Le cerveau met tout en pause. Le souffle peut le relancer.", next: "q_frequency" },
        { id: "bubble_all", type: "entity-bubble", content: "Quand tout se bloque, le corps demande une seule chose : de l'air. On commence là.", next: "q_frequency" },
        { id: "bubble_strangers", type: "entity-bubble", content: "Devant des inconnus, le corps passe en mode prudence. Ta voix reviendra quand il se sentira en sécurité.", next: "q_frequency" },
        { id: "bubble_class", type: "entity-bubble", content: "La classe peut sembler comme une scène où tout le monde regarde. Ce n'est pas un danger réel, mais le corps le ressent comme tel.", next: "q_frequency" },
        { id: "bubble_defend", type: "entity-bubble", content: "Défendre quelque chose d'important avec des mots, c'est difficile. Ta voix a besoin de ton souffle pour revenir.", next: "q_frequency" },
        { id: "q_frequency", type: "question", content: "Est-ce que ça t'empêche de faire des choses que tu voudrais faire ?", options: [
          { label: "Oui, souvent", next: "adult_alert" },
          { label: "Parfois, mais ça passe", next: "bubble_sometimes" },
          { label: "C'était juste une fois", next: "bubble_once" }
        ]},
        { id: "adult_alert", type: "adult-alert", title: "En parler peut vraiment aider", content: "Quand le corps se bloque souvent et empêche de vivre normalement, un adulte de confiance — parent, médecin, psychologue — peut vraiment aider. Tu n'as pas à gérer ça seul.", next: "game", btnLabel: "Je comprends, on continue →" },
        { id: "bubble_sometimes", type: "entity-bubble", content: "Le fait que ça passe veut dire que ton corps sait déjà se débloquer. On va juste lui apprendre à le faire plus vite.", next: "game" },
        { id: "bubble_once", type: "entity-bubble", content: "Une seule fois, c'est déjà précieux d'en parler. Comme ça, si ça revient, tu seras prêt.", next: "game" },
        { id: "game", type: "interaction", content: "Respire et colorie le ciel avec ton souffle. Chaque expiration apporte une couleur nouvelle.", gameId: "ColorBreath", next: "after_game" },
        { id: "after_game", type: "entity-bubble", content: "Ton souffle était là tout le temps. Il ne t'abandonne jamais — même quand tout le reste se bloque.", next: "formula" },
        { id: "formula", type: "formula", content: "Je souffle et je laisse partir ce qui m'alourdit.", next: "action" },
        { id: "action", type: "action", content: "La prochaine fois que ton corps se bloque — juste un souffle. Un seul. Ça suffit pour commencer.", next: null }
      ]
    }
  ],

  ignis: [
    { id: "ignis_p1", title: "Quand j'explose sans l'avoir voulu", subtitle: "Comprendre l'étincelle avant le feu", magicFormula: "Ma colère me parle. Je l'écoute avant qu'elle crie.", steps: [
      { id: "start", type: "entity-intro", content: "Je connais ça — le feu qui part avant qu'on l'ait décidé.", next: "q1" },
      { id: "q1", type: "question", content: "Ça s'est passé avec qui ?", options: [
        { label: "Avec un ami", next: "bubble_friend" },
        { label: "Avec un adulte", next: "bubble_adult" },
        { label: "Avec un frère ou une sœur", next: "bubble_sibling" },
        { label: "Tout seul", next: "bubble_alone" }
      ]},
      { id: "bubble_friend", type: "entity-bubble", content: "Exploser avec un ami fait doublement mal — la colère et la peur de l'abîmer. C'est normal de ressentir les deux.", next: "q2" },
      { id: "bubble_adult", type: "entity-bubble", content: "Exploser avec un adulte peut faire peur. Ta colère était peut-être juste — même si la façon était trop forte.", next: "q2" },
      { id: "bubble_sibling", type: "entity-bubble", content: "Les frères et sœurs peuvent pousser jusqu'au bout. Et souvent, c'est eux qui prennent ce qui était pour quelqu'un d'autre.", next: "q2" },
      { id: "bubble_alone", type: "entity-bubble", content: "Exploser tout seul, contre soi ou contre les choses, ça arrive. Cette énergie cherche une sortie.", next: "q2" },
      { id: "q2", type: "question", content: "Juste avant d'exploser, tu ressens quoi dans ton corps ?", options: [
        { label: "Une chaleur dans la poitrine", next: "bubble_heat" },
        { label: "Les mâchoires ou les poings serrés", next: "bubble_tension" },
        { label: "Une envie de crier ou de frapper", next: "bubble_urge" },
        { label: "Rien — ça part d'un coup", next: "bubble_sudden" }
      ]},
      { id: "bubble_heat", type: "entity-bubble", content: "Cette chaleur, c'est ton signal d'alarme. Si tu la repères à temps, tu peux agir avant l'explosion.", next: "game" },
      { id: "bubble_tension", type: "entity-bubble", content: "Ton corps se prépare au combat. Ces signaux arrivent avant les mots — si tu les vois, tu peux souffler avant.", next: "game" },
      { id: "bubble_urge", type: "entity-bubble", content: "Cette envie est une énergie énorme qui cherche à sortir. On va lui trouver une sortie qui ne fait pas de dégâts.", next: "game" },
      { id: "bubble_sudden", type: "entity-bubble", content: "Quand ça part d'un coup, il y avait quand même un signal — juste très court. On va l'entraîner à le voir.", next: "game" },
      { id: "game", type: "interaction", content: "Souffle sur les flammes. Chaque souffle en éteint une. C'est toi qui contrôles le feu.", gameId: "FireBreath", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu peux éteindre le feu toi-même. Tu viens de le faire.", next: "formula" },
      { id: "formula", type: "formula", content: "Ma colère me parle. Je l'écoute avant qu'elle crie.", next: "action" },
      { id: "action", type: "action", content: "Demain, guette ton signal d'alarme — la chaleur, les mains serrées. Juste le voir, c'est déjà beaucoup.", next: null }
    ]},
    { id: "ignis_p2", title: "Quand on m'a dit quelque chose de blessant", subtitle: "Les mots font des traces, on peut les effacer", magicFormula: "Les mots des autres ne définissent pas qui je suis.", steps: [
      { id: "start", type: "entity-intro", content: "Quelqu'un t'a dit quelque chose qui brûle encore ?", next: "q1" },
      { id: "q1", type: "question", content: "C'était qui ?", options: [
        { label: "Un camarade ou un ami", next: "bubble_peer" },
        { label: "Un adulte", next: "bubble_adult_word" },
        { label: "Un frère ou une sœur", next: "bubble_sib_word" },
        { label: "Je préfère pas dire", next: "bubble_anon" }
      ]},
      { id: "bubble_peer", type: "entity-bubble", content: "Les mots d'un camarade peuvent piquer longtemps. Surtout devant les autres.", next: "q2" },
      { id: "bubble_adult_word", type: "entity-bubble", content: "Quand un adulte dit quelque chose de blessant, ça fait encore plus mal — parce qu'on leur fait confiance.", next: "q2" },
      { id: "bubble_sib_word", type: "entity-bubble", content: "Les frères et sœurs savent exactement où faire mal. Parce qu'ils nous connaissent bien.", next: "q2" },
      { id: "bubble_anon", type: "entity-bubble", content: "Tu n'as pas à dire qui. Ce mot, on va s'en occuper ensemble.", next: "q2" },
      { id: "q2", type: "question", content: "Ce mot ou cette phrase, où est-ce qu'il reste dans toi ?", options: [
        { label: "Dans ma tête, il tourne", next: "bubble_head" },
        { label: "Dans mon ventre, il pèse", next: "bubble_stomach" },
        { label: "Il me revient sans que je le veuille", next: "bubble_intrusive" }
      ]},
      { id: "bubble_head", type: "entity-bubble", content: "Un mot qui tourne dans la tête cherche à être examiné. On va le regarder en face et lui retirer son pouvoir.", next: "game" },
      { id: "bubble_stomach", type: "entity-bubble", content: "Quand ça pèse dans le ventre, le corps a enregistré la blessure. Le souffle peut l'alléger.", next: "game" },
      { id: "bubble_intrusive", type: "entity-bubble", content: "Les mots qui reviennent sans prévenir veulent qu'on s'en occupe. On va le faire maintenant.", next: "game" },
      { id: "game", type: "interaction", content: "Souffle sur ce mot. Regarde-le rétrécir. Il perd de sa puissance à chaque souffle.", gameId: "FireBreath", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ce mot dit quelque chose sur celui qui l'a dit — pas sur toi. Tu es bien plus grand que ça.", next: "formula" },
      { id: "formula", type: "formula", content: "Les mots des autres ne définissent pas qui je suis.", next: "action" },
      { id: "action", type: "action", content: "Écris une chose vraie et belle sur toi. Une seule. Garde-la près de toi.", next: null }
    ]},
    { id: "ignis_p3", title: "Quand tout semble injuste", subtitle: "Trouver quoi faire avec l'injustice", magicFormula: "Je peux ressentir l'injustice et garder ma dignité.", steps: [
      { id: "start", type: "entity-intro", content: "La colère face à l'injustice, c'est du courage déguisé.", next: "q1" },
      { id: "q1", type: "question", content: "Cette injustice, elle vient d'où ?", options: [
        { label: "D'un adulte ou d'une règle", next: "bubble_rule" },
        { label: "D'un ami ou camarade", next: "bubble_peer_inj" },
        { label: "De la vie en général", next: "bubble_life" },
        { label: "De moi-même", next: "bubble_self" }
      ]},
      { id: "bubble_rule", type: "entity-bubble", content: "Certaines règles semblent injustes — et parfois elles le sont vraiment. Ressentir ça, c'est avoir un sens moral. C'est précieux.", next: "q2" },
      { id: "bubble_peer_inj", type: "entity-bubble", content: "L'injustice entre amis fait très mal parce qu'on attendait mieux d'eux.", next: "q2" },
      { id: "bubble_life", type: "entity-bubble", content: "Quand la vie semble injuste en général, c'est souvent qu'on a subi trop de petites choses difficiles en même temps.", next: "q2" },
      { id: "bubble_self", type: "entity-bubble", content: "Être injuste envers soi-même — c'est aussi une forme d'injustice. Et tu mérites mieux.", next: "q2" },
      { id: "q2", type: "question", content: "Qu'est-ce que tu as envie de faire avec cette colère ?", options: [
        { label: "La crier très fort", next: "bubble_scream" },
        { label: "Changer quelque chose", next: "bubble_change_inj" },
        { label: "Juste qu'on me comprenne", next: "bubble_understood" }
      ]},
      { id: "bubble_scream", type: "entity-bubble", content: "L'envie de crier dit que cette colère est grande. On va lui donner de l'espace — d'une façon qui ne blesse personne.", next: "game" },
      { id: "bubble_change_inj", type: "entity-bubble", content: "Vouloir changer quelque chose, c'est transformer la colère en force. C'est ça le vrai courage.", next: "game" },
      { id: "bubble_understood", type: "entity-bubble", content: "Vouloir être compris — c'est tellement humain. Je te comprends, moi. Et on va mettre des mots là-dessus.", next: "game" },
      { id: "game", type: "interaction", content: "Mets tes valeurs dans ton bouclier. Ce en quoi tu crois vraiment.", gameId: "CourageShield", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu portes quelque chose d'important en toi. Ces valeurs, personne ne peut te les enlever.", next: "formula" },
      { id: "formula", type: "formula", content: "Je peux ressentir l'injustice et garder ma dignité.", next: "action" },
      { id: "action", type: "action", content: "Une petite action juste aujourd'hui — même minuscule. Dire la vérité, aider quelqu'un, protéger quelqu'un.", next: null }
    ]},
    { id: "ignis_p4", title: "Quand j'ai envie de tout casser", subtitle: "Trouver où mettre cette énergie énorme", magicFormula: "Mon énergie est grande. Je choisis où elle va.", steps: [
      { id: "start", type: "entity-intro", content: "Parfois la colère est si grande qu'elle cherche une sortie. N'importe laquelle.", next: "q1" },
      { id: "q1", type: "question", content: "Quand tu as envie de tout casser, qu'est-ce qui t'en empêche ?", options: [
        { label: "Je sais que c'est mal", next: "bubble_knows" },
        { label: "J'ai peur des conséquences", next: "bubble_fear_cons" },
        { label: "Rien — j'ai déjà cassé des choses", next: "adult_anger" },
        { label: "Je reste immobile à bouillir", next: "bubble_frozen" }
      ]},
      { id: "bubble_knows", type: "entity-bubble", content: "Tu sais que c'est mal — c'est déjà une force. Maintenant on va trouver où mettre cette énergie.", next: "q2" },
      { id: "bubble_fear_cons", type: "entity-bubble", content: "La peur des conséquences te retient — c'est bien. Mais on va trouver quelque chose de mieux que la retenue seule.", next: "q2" },
      { id: "adult_anger", type: "adult-alert", title: "Parler à un adulte peut aider", content: "Quand la colère fait casser des choses, c'est important d'en parler à un adulte de confiance. Un parent, un médecin — quelqu'un peut t'aider à trouver d'autres sorties.", next: "q2", btnLabel: "Je vais en parler →" },
      { id: "bubble_frozen", type: "entity-bubble", content: "Bouillir immobile, c'est souvent pire que d'exploser. Cette énergie a besoin de bouger.", next: "q2" },
      { id: "q2", type: "question", content: "Qu'est-ce qui t'aide à calmer la colère quand ça marche ?", options: [
        { label: "Bouger, courir, sauter", next: "bubble_move" },
        { label: "Être seul un moment", next: "bubble_alone_anger" },
        { label: "Rien ne m'aide pour l'instant", next: "bubble_nothing" }
      ]},
      { id: "bubble_move", type: "entity-bubble", content: "Bouger, c'est la meilleure façon de transformer la colère. Ton corps sait déjà ce dont il a besoin.", next: "game" },
      { id: "bubble_alone_anger", type: "entity-bubble", content: "Prendre de l'espace, c'est sage. Et pendant ce temps seul, le souffle peut faire beaucoup.", next: "game" },
      { id: "bubble_nothing", type: "entity-bubble", content: "On va trouver ensemble. Commence par le souffle — toujours le souffle.", next: "game" },
      { id: "game", type: "interaction", content: "Souffle fort. Encore. Laisse sortir tout ce feu par la bouche.", gameId: "FireBreath", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Voilà. Elle est sortie. Et tu n'as rien cassé. Tu as tout fait.", next: "formula" },
      { id: "formula", type: "formula", content: "Mon énergie est grande. Je choisis où elle va.", next: "action" },
      { id: "action", type: "action", content: "Trouve ton geste à toi — courir, dessiner fort, frapper un coussin. Ton exutoire magique.", next: null }
    ]},
    { id: "ignis_p5", title: "Après la colère, la réconciliation", subtitle: "Revenir vers l'autre après la tempête", magicFormula: "Je peux me tromper et rester quelqu'un de bien.", steps: [
      { id: "start", type: "entity-intro", content: "La tempête est passée. Maintenant, qu'est-ce qu'on fait ?", next: "q1" },
      { id: "q1", type: "question", content: "Après cette colère, tu te sens comment ?", options: [
        { label: "Honteux de ce que j'ai dit ou fait", next: "bubble_shame" },
        { label: "Soulagé mais fatigué", next: "bubble_relief" },
        { label: "Encore en colère mais moins fort", next: "bubble_still" },
        { label: "Du mal à revenir vers l'autre", next: "bubble_stuck" }
      ]},
      { id: "bubble_shame", type: "entity-bubble", content: "La honte veut dire que tu tiens à bien faire. C'est bon signe. Elle dit : tu peux faire mieux — et tu le veux.", next: "q2" },
      { id: "bubble_relief", type: "entity-bubble", content: "Le soulagement après une colère, c'est réel. L'énergie est sortie. Maintenant on peut penser plus calmement.", next: "q2" },
      { id: "bubble_still", type: "entity-bubble", content: "Encore un peu de braise, c'est normal. Assez calme pour réfléchir — c'est tout ce qu'il faut.", next: "q2" },
      { id: "bubble_stuck", type: "entity-bubble", content: "Revenir vers l'autre après une dispute, c'est l'une des choses les plus difficiles. Et aussi l'une des plus courageuses.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que l'autre personne sait que tu regrettes ?", options: [
        { label: "Non, je sais pas comment lui dire", next: "bubble_how" },
        { label: "On s'est déjà réconciliés", next: "bubble_done" },
        { label: "Je pense qu'elle est encore fâchée", next: "bubble_still_mad" }
      ]},
      { id: "bubble_how", type: "entity-bubble", content: "Les mots ne viennent pas toujours facilement. Un geste, un dessin, un sourire — ça compte aussi.", next: "game" },
      { id: "bubble_done", type: "entity-bubble", content: "Tu l'as déjà fait. C'était courageux. On va quand même réchauffer ce lien.", next: "game" },
      { id: "bubble_still_mad", type: "entity-bubble", content: "L'autre a le droit d'être encore fâché. Et toi, tu peux quand même faire un geste. C'est ça, le courage.", next: "game" },
      { id: "game", type: "interaction", content: "Réchauffe ce cœur qui s'est refroidi pendant la dispute. Lentement, doucement.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "On peut réparer. Presque toujours. Pas tout de suite — mais ça revient.", next: "formula" },
      { id: "formula", type: "formula", content: "Je peux me tromper et rester quelqu'un de bien.", next: "action" },
      { id: "action", type: "action", content: "Un mot, un geste, un dessin. Pour revenir vers l'autre. Aujourd'hui ou demain.", next: null }
    ]}
  ],

  pluma: [
    { id: "pluma_p1", title: "Quand quelqu'un me manque", subtitle: "Garder quelqu'un dans son cœur", magicFormula: "Ceux qui me manquent vivent dans ce que j'ai reçu d'eux.", steps: [
      { id: "start", type: "entity-intro", content: "Tu penses à quelqu'un qui n'est plus là, ou qui est loin ?", next: "q1" },
      { id: "q1", type: "question", content: "Cette personne, elle est absente comment ?", options: [
        { label: "Elle est loin, on se voit peu", next: "bubble_far" },
        { label: "Elle est décédée", next: "bubble_gone" },
        { label: "On s'est éloignés", next: "bubble_apart" },
        { label: "Je préfère pas dire", next: "bubble_private" }
      ]},
      { id: "bubble_far", type: "entity-bubble", content: "La distance n'efface pas le lien. Il est juste étiré — mais toujours là.", next: "q2" },
      { id: "bubble_gone", type: "adult-alert", title: "Parler à un adulte peut t'aider", content: "Perdre quelqu'un, c'est une douleur très grande. Un adulte de confiance peut t'accompagner dans cette tristesse — tu n'as pas à la porter seul.", next: "q2", btnLabel: "Je vais en parler →" },
      { id: "bubble_apart", type: "entity-bubble", content: "S'éloigner de quelqu'un qu'on aimait, c'est une vraie perte. Elle mérite d'être reconnue.", next: "q2" },
      { id: "bubble_private", type: "entity-bubble", content: "Tu n'as pas à tout dire. Ce manque t'appartient.", next: "q2" },
      { id: "q2", type: "question", content: "Ce manque, tu le ressens surtout quand ?", options: [
        { label: "Le soir dans ma chambre", next: "bubble_evening" },
        { label: "Quand je vois des choses qui lui appartiennent", next: "bubble_objects" },
        { label: "Tout le temps, partout", next: "bubble_always" },
        { label: "Dans certains moments précis", next: "bubble_moments" }
      ]},
      { id: "bubble_evening", type: "entity-bubble", content: "Le soir, le silence fait remonter ceux qui manquent. C'est une façon de continuer à les aimer.", next: "game" },
      { id: "bubble_objects", type: "entity-bubble", content: "Les objets gardent une trace de ceux qu'on aime. Ils sont comme des ponts vers eux.", next: "game" },
      { id: "bubble_always", type: "entity-bubble", content: "Un manque constant, c'est un amour constant. C'est beau, même si ça fait mal.", next: "game" },
      { id: "bubble_moments", type: "entity-bubble", content: "Ces moments précis sont comme des rendez-vous avec eux. Ton cœur les garde en mémoire.", next: "game" },
      { id: "game", type: "interaction", content: "Laisse les larmes tomber. Chacune est une pensée pour cette personne qui te manque.", gameId: "TearJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ces larmes te connectent encore à elle. Le manque, c'est une preuve d'amour.", next: "formula" },
      { id: "formula", type: "formula", content: "Ceux qui me manquent vivent dans ce que j'ai reçu d'eux.", next: "action" },
      { id: "action", type: "action", content: "Fais quelque chose que vous aimiez faire ensemble. Pour elle, pour toi.", next: null }
    ]},
    { id: "pluma_p2", title: "Quand je pleure sans savoir pourquoi", subtitle: "Accueillir les larmes sans explication", magicFormula: "Mes larmes savent quelque chose que ma tête ne sait pas encore.", steps: [
      { id: "start", type: "entity-intro", content: "Parfois les larmes arrivent sans prévenir. Sans raison apparente. C'est normal.", next: "q1" },
      { id: "q1", type: "question", content: "Ces larmes arrivent plutôt quand ?", options: [
        { label: "Le soir, avant de dormir", next: "bubble_night" },
        { label: "Sans prévenir, n'importe quand", next: "bubble_random" },
        { label: "Quand je suis seul", next: "bubble_alone" },
        { label: "Quand je suis fatigué", next: "bubble_tired" }
      ]},
      { id: "bubble_night", type: "entity-bubble", content: "La nuit laisse remonter ce qu'on a mis de côté. Ton corps profite du calme pour faire le ménage.", next: "q2" },
      { id: "bubble_random", type: "entity-bubble", content: "Quand les larmes arrivent sans prévenir, c'est souvent que quelque chose attendait depuis longtemps.", next: "q2" },
      { id: "bubble_alone", type: "entity-bubble", content: "La solitude donne la permission de ressentir ce qu'on retenait devant les autres.", next: "q2" },
      { id: "bubble_tired", type: "entity-bubble", content: "La fatigue abaisse les défenses. Ce que tu portais sans t'en rendre compte sort alors.", next: "q2" },
      { id: "q2", type: "question", content: "Quand tu pleures comme ça, tu fais quoi ?", options: [
        { label: "Je les retiens, je veux pas pleurer", next: "bubble_holds" },
        { label: "Je me cache pour pleurer", next: "bubble_hides" },
        { label: "Je les laisse venir", next: "bubble_lets" }
      ]},
      { id: "bubble_holds", type: "entity-bubble", content: "Retenir les larmes demande beaucoup d'énergie. Ce soir, on peut leur donner la permission de sortir.", next: "game" },
      { id: "bubble_hides", type: "entity-bubble", content: "Se cacher pour pleurer, c'est s'accorder un espace sûr. C'est bien. On peut rendre cet espace encore plus doux.", next: "game" },
      { id: "bubble_lets", type: "entity-bubble", content: "Tu sais déjà les laisser venir. C'est une sagesse rare. On va les accueillir ensemble.", next: "game" },
      { id: "game", type: "interaction", content: "Accueille chaque larme. Tu n'as pas à les expliquer. Elles savent ce qu'elles font.", gameId: "TearJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Après les larmes, il y a souvent un peu plus de légèreté. Tu as fait de la place en toi.", next: "formula" },
      { id: "formula", type: "formula", content: "Mes larmes savent quelque chose que ma tête ne sait pas encore.", next: "action" },
      { id: "action", type: "action", content: "La prochaine fois, laisse-toi pleurer. Juste ça. Sans chercher à comprendre.", next: null }
    ]},
    { id: "pluma_p3", title: "Quand la tristesse reste longtemps", subtitle: "Vivre avec une tristesse qui s'installe", magicFormula: "La tristesse est une saison. Elle ne dure pas toujours.", steps: [
      { id: "start", type: "entity-intro", content: "Parfois la tristesse s'installe et ne repart pas vite. Elle prend ses aises.", next: "q1" },
      { id: "q1", type: "question", content: "Depuis combien de temps tu te sens comme ça ?", options: [
        { label: "Quelques jours", next: "bubble_days" },
        { label: "Plusieurs semaines", next: "bubble_weeks" },
        { label: "Longtemps, je sais plus trop", next: "adult_long" }
      ]},
      { id: "bubble_days", type: "entity-bubble", content: "Quelques jours de tristesse, c'est une vague. Elle va passer. On va l'aider.", next: "q2" },
      { id: "bubble_weeks", type: "entity-bubble", content: "Plusieurs semaines, c'est long à porter. Est-ce qu'un adulte de confiance sait que tu traverses ça ?", next: "q2" },
      { id: "adult_long", type: "adult-alert", title: "Parler à un adulte est important", content: "Une tristesse qui dure longtemps mérite d'être partagée avec un adulte de confiance — parent, médecin. Tu n'as pas à porter ça seul.", next: "q2", btnLabel: "Je vais en parler →" },
      { id: "q2", type: "question", content: "Cette tristesse longue, elle ressemble à quoi ?", options: [
        { label: "Un ciel gris qui ne change pas", next: "bubble_grey" },
        { label: "Une fatigue profonde", next: "bubble_tired_sad" },
        { label: "L'envie d'être seul tout le temps", next: "bubble_alone_sad" },
        { label: "Plus rien ne me fait plaisir", next: "bubble_nojoy" }
      ]},
      { id: "bubble_grey", type: "entity-bubble", content: "Le gris constant est épuisant. On va essayer de mettre juste une petite couleur dedans.", next: "game" },
      { id: "bubble_tired_sad", type: "entity-bubble", content: "La tristesse fatigue vraiment. Ton corps a besoin de douceur — pas d'efforts.", next: "game" },
      { id: "bubble_alone_sad", type: "entity-bubble", content: "Vouloir être seul peut être une protection. Et aussi parfois ce qui aggrave. On va trouver l'équilibre.", next: "game" },
      { id: "bubble_nojoy", type: "entity-bubble", content: "Quand plus rien ne fait plaisir, c'est le signe que quelque chose a besoin d'attention et de soin.", next: "game" },
      { id: "game", type: "interaction", content: "Respire de la couleur dans ton ciel gris. Doucement. Une couleur à la fois.", gameId: "ColorBreath", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Il y a encore de la couleur en toi. Elle attendait juste qu'on lui fasse de la place.", next: "formula" },
      { id: "formula", type: "formula", content: "La tristesse est une saison. Elle ne dure pas toujours.", next: "action" },
      { id: "action", type: "action", content: "Une chose petite et douce pour toi aujourd'hui. Juste une. Ce que tu aimes vraiment.", next: null }
    ]},
    { id: "pluma_p4", title: "Quand quelque chose de beau est fini", subtitle: "Dire au revoir sans effacer", magicFormula: "Ce qui est fini n'est pas perdu. Il reste dans moi.", steps: [
      { id: "start", type: "entity-intro", content: "Quelque chose de beau s'est terminé. Ça laisse un vide réel.", next: "q1" },
      { id: "q1", type: "question", content: "Qu'est-ce qui s'est terminé ?", options: [
        { label: "Une amitié ou une relation", next: "bubble_relation" },
        { label: "Une période de ma vie", next: "bubble_period" },
        { label: "Quelque chose que j'aimais faire", next: "bubble_activity" },
        { label: "Un lieu où je me sentais bien", next: "bubble_place" }
      ]},
      { id: "bubble_relation", type: "entity-bubble", content: "La fin d'une relation est une vraie perte. Elle mérite d'être pleurée — même si l'autre est encore là.", next: "q2" },
      { id: "bubble_period", type: "entity-bubble", content: "Les périodes de vie qui se terminent laissent une trace. Ce n'est pas rien.", next: "q2" },
      { id: "bubble_activity", type: "entity-bubble", content: "Perdre quelque chose qu'on aimait faire, c'est perdre une partie de qui on est. C'est réel.", next: "q2" },
      { id: "bubble_place", type: "entity-bubble", content: "Les lieux gardent nos souvenirs. Quitter un endroit, c'est quitter une partie de soi.", next: "q2" },
      { id: "q2", type: "question", content: "Cette fin, comment tu la portes ?", options: [
        { label: "Je voudrais revenir en arrière", next: "bubble_back" },
        { label: "Je garde tout pour ne pas oublier", next: "bubble_keeps" },
        { label: "J'essaie de pas y penser", next: "bubble_avoids" },
        { label: "Je suis triste mais j'essaie d'avancer", next: "bubble_forward" }
      ]},
      { id: "bubble_back", type: "entity-bubble", content: "L'envie de revenir en arrière est normale. Ce qui était beau mérite d'être regretté.", next: "game" },
      { id: "bubble_keeps", type: "entity-bubble", content: "Garder pour ne pas oublier — c'est un acte d'amour. On peut garder les souvenirs et avancer en même temps.", next: "game" },
      { id: "bubble_avoids", type: "entity-bubble", content: "Éviter d'y penser protège pour un temps. Mais le souvenir attend patiemment. On peut lui faire de la place maintenant.", next: "game" },
      { id: "bubble_forward", type: "entity-bubble", content: "Être triste et avancer en même temps — c'est exactement ce qu'on peut faire. Les deux à la fois.", next: "game" },
      { id: "game", type: "interaction", content: "Mets les beaux moments dans le bocal. Ils sont à toi pour toujours — même si c'est fini.", gameId: "VictoryJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ce bocal, personne ne peut te le prendre. Ces moments ont existé et existeront toujours en toi.", next: "formula" },
      { id: "formula", type: "formula", content: "Ce qui est fini n'est pas perdu. Il reste dans moi.", next: "action" },
      { id: "action", type: "action", content: "Dessine ou écris un souvenir de ce moment beau. Juste pour toi. Pour ne pas oublier.", next: null }
    ]},
    { id: "pluma_p5", title: "Quand je me sens gris de l'intérieur", subtitle: "Retrouver une étincelle", magicFormula: "Même les jours gris ont une lumière quelque part.", steps: [
      { id: "start", type: "entity-intro", content: "Tu n'es ni triste ni heureux. Tu es juste gris. Un peu à plat.", next: "q1" },
      { id: "q1", type: "question", content: "Ce gris, il est là depuis quand ?", options: [
        { label: "Depuis aujourd'hui", next: "bubble_today" },
        { label: "Depuis quelques jours", next: "bubble_days_grey" },
        { label: "Je sais plus trop, longtemps", next: "adult_grey" }
      ]},
      { id: "bubble_today", type: "entity-bubble", content: "Une journée grise, ça arrive. On va chercher une petite lumière dedans.", next: "q2" },
      { id: "bubble_days_grey", type: "entity-bubble", content: "Quelques jours de gris, c'est une vague. On va y mettre un peu de couleur ensemble.", next: "q2" },
      { id: "adult_grey", type: "adult-alert", title: "Parler à un adulte peut aider", content: "Un gris qui dure longtemps mérite l'attention d'un adulte de confiance. Un parent, un médecin — quelqu'un qui peut t'aider à comprendre ce qui se passe.", next: "q2", btnLabel: "Je vais en parler →" },
      { id: "q2", type: "question", content: "Qu'est-ce qui t'a donné un tout petit peu de plaisir récemment ?", options: [
        { label: "Un repas ou une boisson que j'aime", next: "bubble_food" },
        { label: "Une musique ou un son", next: "bubble_music" },
        { label: "Un moment avec quelqu'un", next: "bubble_person_grey" },
        { label: "Je ne vois rien... rien", next: "bubble_nothing_grey" }
      ]},
      { id: "bubble_food", type: "entity-bubble", content: "Même tout petit, ce plaisir existe. Accrochons-nous à lui — c'est une lumière.", next: "game" },
      { id: "bubble_music", type: "entity-bubble", content: "La musique peut atteindre des endroits que les mots n'atteignent pas. C'est une vraie lumière.", next: "game" },
      { id: "bubble_person_grey", type: "entity-bubble", content: "Un moment avec quelqu'un — même court — compte vraiment. Ce lien est une lumière.", next: "game" },
      { id: "bubble_nothing_grey", type: "entity-bubble", content: "Quand on ne voit rien, c'est que le gris est épais. On va souffler dedans ensemble.", next: "game" },
      { id: "game", type: "interaction", content: "Souffle une couleur dans le gris. Même une toute petite. Elle compte.", gameId: "ColorBreath", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu vois ? Il y avait encore de la couleur en toi. Elle attendait juste.", next: "formula" },
      { id: "formula", type: "formula", content: "Même les jours gris ont une lumière quelque part.", next: "action" },
      { id: "action", type: "action", content: "Cherche ta toute petite lumière aujourd'hui. Une seule. Elle est là.", next: null }
    ]}
  ],

  nox: [
    { id: "nox_p1", title: "Quand les pensées tournent avant de dormir", subtitle: "Calmer le manège du soir", magicFormula: "La nuit, je pose mes pensées. Elles peuvent attendre demain.", steps: [
      { id: "start", type: "entity-intro", content: "Le soir, les pensées tournent. On va les ralentir ensemble.", next: "q1" },
      { id: "q1", type: "question", content: "Ce soir, qu'est-ce qui tourne le plus dans ta tête ?", options: [
        { label: "Ce qui s'est passé aujourd'hui", next: "bubble_today_nox" },
        { label: "Ce qui va se passer demain", next: "bubble_tomorrow" },
        { label: "Quelqu'un à qui je pense", next: "bubble_someone" },
        { label: "Des images qui reviennent", next: "bubble_images_nox" }
      ]},
      { id: "bubble_today_nox", type: "entity-bubble", content: "Rejouer sa journée le soir, c'est le cerveau qui essaie de tout classer. On va l'aider à s'arrêter.", next: "q2" },
      { id: "bubble_tomorrow", type: "entity-bubble", content: "S'inquiéter de demain ce soir ne changera pas demain. Mais ça peut abîmer cette nuit.", next: "q2" },
      { id: "bubble_someone", type: "entity-bubble", content: "Penser à quelqu'un avant de dormir, c'est souvent parce que ce lien compte beaucoup.", next: "q2" },
      { id: "bubble_images_nox", type: "entity-bubble", content: "Les images qui reviennent cherchent à être vues. Une fois vues, elles s'apaisent souvent.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que ça t'empêche de dormir souvent ?", options: [
        { label: "Oui, presque tous les soirs", next: "adult_sleep" },
        { label: "Parfois, mais ça passe", next: "bubble_sometimes_nox" },
        { label: "Juste ce soir", next: "bubble_tonight" }
      ]},
      { id: "adult_sleep", type: "adult-alert", title: "En parler peut vraiment aider", content: "Quand les pensées empêchent de dormir presque tous les soirs, un adulte de confiance peut t'aider à trouver des solutions.", next: "game", btnLabel: "Je vais en parler →" },
      { id: "bubble_sometimes_nox", type: "entity-bubble", content: "Parfois c'est déjà beaucoup. On va apprendre à ton cerveau à poser les pensées ailleurs.", next: "game" },
      { id: "bubble_tonight", type: "entity-bubble", content: "Juste ce soir — c'est peut-être qu'aujourd'hui était chargé. On va alléger avant de dormir.", next: "game" },
      { id: "game", type: "interaction", content: "Mets tes pensées du soir dans le bocal. Elles t'attendent demain matin.", gameId: "WorryJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Le bocal est fermé. Ta tête peut se reposer. Les pensées sont gardées pour demain.", next: "formula" },
      { id: "formula", type: "formula", content: "La nuit, je pose mes pensées. Elles peuvent attendre demain.", next: "action" },
      { id: "action", type: "action", content: "Un carnet près du lit. Ce soir, écris juste une pensée avant d'éteindre. Juste une.", next: null }
    ]},
    { id: "nox_p2", title: "Rejouer la fin d'un mauvais rêve", subtitle: "Réécrire le cauchemar à sa façon", magicFormula: "Je suis l'auteur de mes rêves. Je peux les changer.", steps: [
      { id: "start", type: "entity-intro", content: "Un mauvais rêve peut se rejouer autrement. Essaie avec moi.", next: "q1" },
      { id: "q1", type: "question", content: "Dans ton cauchemar, qu'est-ce qui fait le plus peur ?", options: [
        { label: "Quelque chose qui me poursuit", next: "bubble_chased" },
        { label: "Je suis perdu tout seul", next: "bubble_lost" },
        { label: "Quelqu'un que j'aime est en danger", next: "bubble_loved" },
        { label: "Des images très sombres", next: "bubble_dark" }
      ]},
      { id: "bubble_chased", type: "entity-bubble", content: "Être poursuivi dans un rêve, c'est souvent fuir quelque chose qu'on évite dans la vie. Dans ta nouvelle fin, tu peux te retourner.", next: "q2" },
      { id: "bubble_lost", type: "entity-bubble", content: "Être perdu seul dans un rêve dit souvent qu'on cherche quelque chose. Dans ta nouvelle fin, tu trouves.", next: "q2" },
      { id: "bubble_loved", type: "entity-bubble", content: "Rêver que quelqu'un qu'on aime est en danger, c'est aimer très fort. Dans ta nouvelle fin, tu le sauves.", next: "q2" },
      { id: "bubble_dark", type: "entity-bubble", content: "Les images sombres viennent du fond du cerveau. Dans ta nouvelle fin, une lumière arrive.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que ce cauchemar revient souvent ?", options: [
        { label: "Oui, souvent", next: "adult_nightmare" },
        { label: "De temps en temps", next: "bubble_sometimes_dream" },
        { label: "C'était la première fois", next: "bubble_first_dream" }
      ]},
      { id: "adult_nightmare", type: "adult-alert", title: "En parler peut vraiment aider", content: "Un cauchemar qui revient souvent mérite l'attention d'un adulte de confiance. Un parent, un médecin — quelqu'un qui peut t'aider.", next: "game", btnLabel: "Je vais en parler →" },
      { id: "bubble_sometimes_dream", type: "entity-bubble", content: "Un cauchemar qui revient a quelque chose à dire. En lui donnant une nouvelle fin, on lui retire son pouvoir.", next: "game" },
      { id: "bubble_first_dream", type: "entity-bubble", content: "Première fois — on va tout de suite lui donner une nouvelle fin pour qu'il ne revienne pas.", next: "game" },
      { id: "game", type: "interaction", content: "Attrape les étoiles pour construire la nouvelle fin de ton rêve. Tu es l'auteur.", gameId: "StarCatcher", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu viens d'écrire une nouvelle fin. Elle est à toi. Ce soir, rappelle-toi-en avant de dormir.", next: "formula" },
      { id: "formula", type: "formula", content: "Je suis l'auteur de mes rêves. Je peux les changer.", next: "action" },
      { id: "action", type: "action", content: "Ce soir avant de dormir, imagine ta nouvelle fin. Lentement, comme un film doux.", next: null }
    ]},
    { id: "nox_p3", title: "Créer son espace de sécurité", subtitle: "Un endroit imaginaire pour se réfugier", magicFormula: "J'ai un endroit à moi où je suis toujours en sécurité.", steps: [
      { id: "start", type: "entity-intro", content: "On va construire ton endroit secret. Personne d'autre n'y entre.", next: "q1" },
      { id: "q1", type: "question", content: "Si tu avais un endroit complètement sûr, il ressemblerait à quoi ?", options: [
        { label: "Une cabane dans les arbres", next: "bubble_treehouse" },
        { label: "Une grotte avec des cristaux", next: "bubble_cave" },
        { label: "Un nuage dans le ciel", next: "bubble_cloud" },
        { label: "Quelque chose que j'invente", next: "bubble_custom" }
      ]},
      { id: "bubble_treehouse", type: "entity-bubble", content: "En hauteur, à l'abri. Avec peut-être une trappe qu'on peut fermer. Cet endroit est à toi maintenant.", next: "q2" },
      { id: "bubble_cave", type: "entity-bubble", content: "Protégé par la roche, avec une lumière douce venant des cristaux. Cet endroit est à toi.", next: "q2" },
      { id: "bubble_cloud", type: "entity-bubble", content: "Flottant, doux, au-dessus de tout. Personne ne peut t'atteindre là-haut. Cet endroit est à toi.", next: "q2" },
      { id: "bubble_custom", type: "entity-bubble", content: "Parfait — tu l'inventes. C'est encore plus puissant parce que c'est exactement le tien.", next: "q2" },
      { id: "q2", type: "question", content: "Dans cet endroit, qu'est-ce qui est important pour toi ?", options: [
        { label: "Être seul, tranquille", next: "bubble_peaceful" },
        { label: "Avoir quelqu'un que j'aime avec moi", next: "bubble_with_someone" },
        { label: "Des choses qui m'apaisent", next: "bubble_comforting" }
      ]},
      { id: "bubble_peaceful", type: "entity-bubble", content: "Un refuge de silence. Où le monde du dehors n'entre pas.", next: "game" },
      { id: "bubble_with_someone", type: "entity-bubble", content: "Tu peux emmener qui tu veux dans cet endroit imaginaire. Ils seront toujours là.", next: "game" },
      { id: "bubble_comforting", type: "entity-bubble", content: "Des textures, des sons, des odeurs — ton refuge a tout ce qui t'apaise.", next: "game" },
      { id: "game", type: "interaction", content: "Attrape les étoiles pour décorer ton espace secret. Il t'appartient pour toujours.", gameId: "StarCatcher", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Cet endroit existe maintenant. Tu peux y aller n'importe quand — en fermant juste les yeux.", next: "formula" },
      { id: "formula", type: "formula", content: "J'ai un endroit à moi où je suis toujours en sécurité.", next: "action" },
      { id: "action", type: "action", content: "Dessine ton espace secret ce soir. Même juste les contours. Garde-le quelque part.", next: null }
    ]},
    { id: "nox_p4", title: "Quand je ne veux pas aller dormir", subtitle: "Comprendre ce que cache ce refus", magicFormula: "Le sommeil est un ami, pas un ennemi.", steps: [
      { id: "start", type: "entity-intro", content: "Ne pas vouloir dormir, c'est souvent protéger quelque chose. On va voir quoi.", next: "q1" },
      { id: "q1", type: "question", content: "Pourquoi tu repousses le moment de dormir ?", options: [
        { label: "J'ai peur de faire des cauchemars", next: "bubble_nightmare_fear" },
        { label: "J'aime pas être seul dans le noir", next: "bubble_dark_alone" },
        { label: "Je veux pas rater quelque chose", next: "bubble_fomo" },
        { label: "Je ne sais pas, ça vient juste", next: "bubble_unknown_sleep" }
      ]},
      { id: "bubble_nightmare_fear", type: "entity-bubble", content: "Avoir peur des cauchemars avant même de dormir, c'est épuisant. Mais rester éveillé ne les empêche pas — ça retarde juste le repos.", next: "q2" },
      { id: "bubble_dark_alone", type: "entity-bubble", content: "Être seul dans le noir peut faire peur. Ton espace de sécurité peut t'accompagner.", next: "q2" },
      { id: "bubble_fomo", type: "entity-bubble", content: "Avoir peur de rater quelque chose — c'est très courant. Mais ce qui se passe pendant que tu dors, c'est ton cerveau qui se recharge.", next: "q2" },
      { id: "bubble_unknown_sleep", type: "entity-bubble", content: "Parfois le corps résiste sans qu'on sache pourquoi. On va l'apprivoiser ensemble.", next: "q2" },
      { id: "q2", type: "question", content: "Quand tu repousses le sommeil, qu'est-ce que tu fais à la place ?", options: [
        { label: "Je regarde un écran", next: "bubble_screen" },
        { label: "Je pense à plein de choses", next: "bubble_thinks" },
        { label: "Je lis ou je dessine", next: "bubble_creates" }
      ]},
      { id: "bubble_screen", type: "entity-bubble", content: "Les écrans envoient un signal au cerveau : c'est le jour. Ça rend le sommeil encore plus difficile.", next: "game" },
      { id: "bubble_thinks", type: "entity-bubble", content: "Penser à plein de choses, c'est le cerveau qui cherche à être utile. On va lui donner une dernière tâche douce.", next: "game" },
      { id: "bubble_creates", type: "entity-bubble", content: "Lire ou dessiner c'est bien — ça prépare le cerveau à ralentir. On va juste finir avec quelque chose d'encore plus doux.", next: "game" },
      { id: "game", type: "interaction", content: "Attrape les étoiles du soir. Elles veillent sur ta nuit.", gameId: "StarCatcher", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "La nuit est de ton côté. Elle prépare un meilleur demain. Elle n'est pas ton ennemie.", next: "formula" },
      { id: "formula", type: "formula", content: "Le sommeil est un ami, pas un ennemi.", next: "action" },
      { id: "action", type: "action", content: "Un rituel du soir — 3 choses douces avant d'éteindre. Les mêmes chaque soir. Le cerveau aime les rituels.", next: null }
    ]},
    { id: "nox_p5", title: "Quand la nuit semble interminable", subtitle: "Traverser les heures difficiles", magicFormula: "Cette nuit se terminera. Le matin arrive toujours.", steps: [
      { id: "start", type: "entity-intro", content: "Les nuits longues sont épuisantes. Je reste avec toi.", next: "q1" },
      { id: "q1", type: "question", content: "Quand tu n'arrives pas à dormir, qu'est-ce qui se passe ?", options: [
        { label: "Je regarde le plafond", next: "bubble_ceiling" },
        { label: "Je pense à des choses qui m'inquiètent", next: "bubble_worries_night" },
        { label: "Mon corps est agité", next: "bubble_restless" }
      ]},
      { id: "bubble_ceiling", type: "entity-bubble", content: "Regarder le plafond dans le noir, c'est laisser le cerveau tourner à vide. On va lui donner quelque chose de doux à faire.", next: "q2" },
      { id: "bubble_worries_night", type: "entity-bubble", content: "Les inquiétudes de nuit semblent toujours plus grandes qu'elles ne sont. La fatigue amplifie tout.", next: "q2" },
      { id: "bubble_restless", type: "entity-bubble", content: "Un corps agité a de l'énergie à dépenser. On va l'aider à la libérer doucement.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que ça arrive souvent que tu passes toute une nuit sans dormir ?", options: [
        { label: "Oui, souvent", next: "adult_insomnia" },
        { label: "Parfois", next: "bubble_sometimes_night" },
        { label: "C'est la première fois", next: "bubble_first_night" }
      ]},
      { id: "adult_insomnia", type: "adult-alert", title: "Un adulte peut t'aider", content: "Passer souvent des nuits sans dormir est difficile et peut affecter ta santé. Parle-en à un adulte de confiance ou à un médecin.", next: "game", btnLabel: "Je vais en parler →" },
      { id: "bubble_sometimes_night", type: "entity-bubble", content: "Les nuits difficiles arrivent. Même sans dormir, ton corps se repose quand il est allongé.", next: "game" },
      { id: "bubble_first_night", type: "entity-bubble", content: "Première nuit difficile — c'est souvent quelque chose de chargé. On va alléger.", next: "game" },
      { id: "game", type: "interaction", content: "Tapote doucement, très lentement. Au rythme d'une respiration calme. Lent... lent...", gameId: "HeartBeat", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Le matin arrive toujours. Même les nuits les plus longues se terminent. Tu vas traverser celle-ci.", next: "formula" },
      { id: "formula", type: "formula", content: "Cette nuit se terminera. Le matin arrive toujours.", next: "action" },
      { id: "action", type: "action", content: "Garde quelque chose de doux près de ton lit — un objet, une peluche, une couverture préférée.", next: null }
    ]}
  ],

  soli: [
    { id: "soli_p1", title: "Quand je me sens invisible", subtitle: "Retrouver sa présence dans le monde", magicFormula: "Je suis là. Et ma présence a de la valeur.", steps: [
      { id: "start", type: "entity-intro", content: "Tu es là, mais personne ne te voit vraiment ?", next: "q1" },
      { id: "q1", type: "question", content: "Où est-ce que tu te sens le plus invisible ?", options: [
        { label: "À l'école, en classe", next: "bubble_class_inv" },
        { label: "Avec mes amis", next: "bubble_friends_inv" },
        { label: "Dans ma famille", next: "bubble_family_inv" },
        { label: "Partout", next: "bubble_everywhere" }
      ]},
      { id: "bubble_class_inv", type: "entity-bubble", content: "En classe, il y a beaucoup d'élèves et peu d'espace pour chacun. Mais tu as ta place.", next: "q2" },
      { id: "bubble_friends_inv", type: "entity-bubble", content: "Se sentir invisible avec des amis est l'une des solitudes les plus douloureuses.", next: "q2" },
      { id: "bubble_family_inv", type: "entity-bubble", content: "Ne pas être vraiment vu dans sa famille, c'est une blessure profonde. Tu mérites d'être vu.", next: "q2" },
      { id: "bubble_everywhere", type: "entity-bubble", content: "Se sentir invisible partout, c'est épuisant. Un adulte de confiance peut t'aider à trouver des espaces où tu comptes.", next: "q2" },
      { id: "q2", type: "question", content: "Être invisible, ça te fait ressentir quoi surtout ?", options: [
        { label: "De la tristesse", next: "bubble_sad_inv" },
        { label: "De la colère", next: "bubble_angry_inv" },
        { label: "Une envie de disparaître vraiment", next: "adult_invisible" },
        { label: "Un sentiment d'être différent", next: "bubble_different_inv" }
      ]},
      { id: "bubble_sad_inv", type: "entity-bubble", content: "Cette tristesse dit que le lien avec les autres compte pour toi. C'est une force.", next: "game" },
      { id: "bubble_angry_inv", type: "entity-bubble", content: "La colère dit : je mérite mieux. Et tu as raison.", next: "game" },
      { id: "adult_invisible", type: "adult-alert", title: "Parler à un adulte est important", content: "Avoir envie de disparaître vraiment est un signal important. Parle à un adulte de confiance maintenant — parent, professeur, médecin.", next: "game", btnLabel: "Je vais en parler →" },
      { id: "bubble_different_inv", type: "entity-bubble", content: "Être différent peut sembler une solitude. Mais c'est aussi souvent ce qui rend quelqu'un unique.", next: "game" },
      { id: "game", type: "interaction", content: "Mets dans ton bouclier ce qui fait ta vraie valeur — ce que toi tu sais de toi.", gameId: "CourageShield", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Je te vois, moi. Et ce que tu portes a de la valeur. Tu es là, et ça compte.", next: "formula" },
      { id: "formula", type: "formula", content: "Je suis là. Et ma présence a de la valeur.", next: "action" },
      { id: "action", type: "action", content: "Dis une chose à voix haute aujourd'hui. N'importe laquelle. Juste pour t'entendre exister.", next: null }
    ]},
    { id: "soli_p2", title: "Quand j'ai été rejeté du groupe", subtitle: "Traverser la blessure du rejet", magicFormula: "Le rejet me blesse mais ne me définit pas.", steps: [
      { id: "start", type: "entity-intro", content: "Être mis de côté, ça fait vraiment très mal.", next: "q1" },
      { id: "q1", type: "question", content: "Comment ça s'est passé ?", options: [
        { label: "On m'a exclu intentionnellement", next: "bubble_excluded" },
        { label: "Le groupe s'est formé sans moi", next: "bubble_left_out" },
        { label: "On m'a dit de partir", next: "bubble_told_go" },
        { label: "Je ne sais pas trop ce qui s'est passé", next: "bubble_confused_rej" }
      ]},
      { id: "bubble_excluded", type: "entity-bubble", content: "Être exclu intentionnellement, c'est une blessure volontaire. Ce n'est pas acceptable et ce n'est pas ta faute.", next: "q2" },
      { id: "bubble_left_out", type: "entity-bubble", content: "Être laissé de côté sans raison apparente peut faire encore plus mal que d'être exclu.", next: "q2" },
      { id: "bubble_told_go", type: "entity-bubble", content: "Se faire dire de partir — c'est cruel. Et ça ne dit rien de vrai sur ta valeur.", next: "q2" },
      { id: "bubble_confused_rej", type: "entity-bubble", content: "Ne pas comprendre ce qui s'est passé est souvent le plus difficile à porter.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que c'est quelque chose qui se répète, ou c'était juste cette fois ?", options: [
        { label: "Ça se répète souvent", next: "adult_bullying" },
        { label: "Ça arrive de temps en temps", next: "bubble_sometimes_rej" },
        { label: "C'était juste cette fois", next: "bubble_once_rej" }
      ]},
      { id: "adult_bullying", type: "adult-alert", title: "Parler à un adulte est important", content: "Quand le rejet se répète, c'est peut-être de l'intimidation. Un adulte de confiance — parent, professeur — doit le savoir pour pouvoir t'aider.", next: "game", btnLabel: "Je vais en parler →" },
      { id: "bubble_sometimes_rej", type: "entity-bubble", content: "Ça revient — c'est difficile. On va construire quelque chose de solide en toi pour traverser ça.", next: "game" },
      { id: "bubble_once_rej", type: "entity-bubble", content: "Cette fois-là a quand même fait mal. Elle mérite d'être reconnue.", next: "game" },
      { id: "game", type: "interaction", content: "Mets dans ton bouclier ce qui fait ta vraie valeur — indépendamment de ce groupe.", gameId: "CourageShield", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ce bouclier dit qui tu es vraiment. Pas ce groupe.", next: "formula" },
      { id: "formula", type: "formula", content: "Le rejet me blesse mais ne me définit pas.", next: "action" },
      { id: "action", type: "action", content: "Cherche une personne — une seule — qui te voit vraiment. Elle est là quelque part.", next: null }
    ]},
    { id: "soli_p3", title: "Quand je préfère être seul", subtitle: "La solitude choisie, c'est différent", magicFormula: "Être seul par choix est une façon de prendre soin de moi.", steps: [
      { id: "start", type: "entity-intro", content: "Parfois on a besoin d'être seul. Et c'est tout à fait bien.", next: "q1" },
      { id: "q1", type: "question", content: "Quand tu préfères être seul, c'est pour quoi surtout ?", options: [
        { label: "Me recharger après trop de monde", next: "bubble_recharge" },
        { label: "Faire ce que j'aime sans contrainte", next: "bubble_freedom" },
        { label: "Réfléchir tranquillement", next: "bubble_think" },
        { label: "Parce que les autres me fatiguent", next: "bubble_tired_people" }
      ]},
      { id: "bubble_recharge", type: "entity-bubble", content: "Certaines personnes se rechargent seules. C'est une façon d'être — pas un défaut.", next: "q2" },
      { id: "bubble_freedom", type: "entity-bubble", content: "La liberté de faire ce qu'on aime sans être jugé — c'est précieux. C'est prendre soin de soi.", next: "q2" },
      { id: "bubble_think", type: "entity-bubble", content: "Certains esprits ont besoin de silence pour réfléchir. C'est une intelligence particulière.", next: "q2" },
      { id: "bubble_tired_people", type: "entity-bubble", content: "Être fatigué des autres, c'est parfois un signe qu'on a donné beaucoup. La solitude permet de récupérer.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que les autres comprennent ton besoin d'être seul ?", options: [
        { label: "Non, ils pensent que je suis bizarre", next: "bubble_misunderstood" },
        { label: "Certains comprennent, d'autres non", next: "bubble_mixed" },
        { label: "Oui, ils respectent ça", next: "bubble_respected" }
      ]},
      { id: "bubble_misunderstood", type: "entity-bubble", content: "Ne pas être compris pour ça peut être difficile. Mais ton besoin est légitime.", next: "game" },
      { id: "bubble_mixed", type: "entity-bubble", content: "Ceux qui comprennent sont ceux qui te connaissent vraiment.", next: "game" },
      { id: "bubble_respected", type: "entity-bubble", content: "C'est beau d'avoir des gens qui respectent ton espace. Garde-les proches.", next: "game" },
      { id: "game", type: "interaction", content: "Mets dans le bocal ce que tu aimes faire seul — tes trésors solitaires.", gameId: "VictoryJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu es une bonne compagnie pour toi-même. C'est un cadeau rare.", next: "formula" },
      { id: "formula", type: "formula", content: "Être seul par choix est une façon de prendre soin de moi.", next: "action" },
      { id: "action", type: "action", content: "Offre-toi un moment seul cette semaine — intentionnellement. C'est ton cadeau à toi-même.", next: null }
    ]},
    { id: "soli_p4", title: "Trouver sa tribu", subtitle: "Chercher ceux qui nous ressemblent", magicFormula: "Il y a quelqu'un, quelque part, qui me comprendra.", steps: [
      { id: "start", type: "entity-intro", content: "Ta tribu existe. Elle n'est peut-être pas encore trouvée.", next: "q1" },
      { id: "q1", type: "question", content: "Avec qui tu te sens le plus toi-même en ce moment ?", options: [
        { label: "Personne pour l'instant", next: "bubble_nobody" },
        { label: "Un adulte de confiance", next: "bubble_adult_tribe" },
        { label: "Un ami, même à distance", next: "bubble_one_friend" },
        { label: "En ligne, avec des gens qui partagent mes intérêts", next: "bubble_online" }
      ]},
      { id: "bubble_nobody", type: "entity-bubble", content: "Personne pour l'instant — c'est une solitude réelle. Mais le fait que tu cherches veut dire que tu y crois encore. C'est important.", next: "q2" },
      { id: "bubble_adult_tribe", type: "entity-bubble", content: "Un adulte de confiance, c'est un vrai lien. Et souvent il peut t'aider à trouver ta tribu.", next: "q2" },
      { id: "bubble_one_friend", type: "entity-bubble", content: "Un ami qui te comprend vraiment, c'est plus rare et précieux que vingt amis qui ne te voient pas.", next: "q2" },
      { id: "bubble_online", type: "entity-bubble", content: "Trouver des gens qui partagent tes intérêts en ligne, c'est réel. Ces liens comptent.", next: "q2" },
      { id: "q2", type: "question", content: "Qu'est-ce qui rend difficile de trouver des gens qui te ressemblent ?", options: [
        { label: "Je suis différent des gens autour de moi", next: "bubble_different_tribe" },
        { label: "J'ai du mal à faire le premier pas", next: "bubble_first_step" },
        { label: "J'ai été blessé avant", next: "bubble_hurt" }
      ]},
      { id: "bubble_different_tribe", type: "entity-bubble", content: "Être différent de son environnement immédiat, c'est difficile. Mais ta tribu existe — peut-être ailleurs.", next: "game" },
      { id: "bubble_first_step", type: "entity-bubble", content: "Faire le premier pas fait peur. On va construire un pont ensemble.", next: "game" },
      { id: "bubble_hurt", type: "entity-bubble", content: "Avoir été blessé avant rend prudent. C'est une protection intelligente. Mais elle peut aussi fermer des portes.", next: "game" },
      { id: "game", type: "interaction", content: "Construis un pont. Le premier fil, c'est toi qui le poses.", gameId: "FriendBridge", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Les liens se construisent doucement. Fil par fil. Le premier est le plus difficile.", next: "formula" },
      { id: "formula", type: "formula", content: "Il y a quelqu'un, quelque part, qui me comprendra.", next: "action" },
      { id: "action", type: "action", content: "Un message, un sourire, une question. Cette semaine. Le premier fil du lien.", next: null }
    ]},
    { id: "soli_p5", title: "Quand un ami proche s'éloigne", subtitle: "Traverser la distance dans une amitié", magicFormula: "Les amitiés changent. Elles ne meurent pas toujours.", steps: [
      { id: "start", type: "entity-intro", content: "Quelqu'un dont tu étais proche s'éloigne ?", next: "q1" },
      { id: "q1", type: "question", content: "Comment ça se manifeste cet éloignement ?", options: [
        { label: "Il répond moins, on se voit moins", next: "bubble_less_contact" },
        { label: "Il a de nouveaux amis et me délaisse", next: "bubble_new_friends" },
        { label: "On s'est disputés et rien n'est réparé", next: "bubble_fight" },
        { label: "Je ne sais pas ce qui s'est passé", next: "bubble_unknown_dist" }
      ]},
      { id: "bubble_less_contact", type: "entity-bubble", content: "Moins de contact peut vouloir dire beaucoup de choses — pas forcément un rejet. Parfois les gens traversent des choses.", next: "q2" },
      { id: "bubble_new_friends", type: "entity-bubble", content: "Voir un ami se lier à d'autres et se sentir mis de côté fait vraiment mal.", next: "q2" },
      { id: "bubble_fight", type: "entity-bubble", content: "Une dispute non réparée laisse un silence lourd. Les deux côtés attendent souvent que l'autre fasse le premier pas.", next: "q2" },
      { id: "bubble_unknown_dist", type: "entity-bubble", content: "L'éloignement sans explication est souvent le plus difficile à comprendre.", next: "q2" },
      { id: "q2", type: "question", content: "Cet éloignement, tu le ressens comment ?", options: [
        { label: "Comme un abandon", next: "bubble_abandoned" },
        { label: "Avec de la tristesse", next: "bubble_sad_dist" },
        { label: "Avec de la colère", next: "bubble_angry_dist" },
        { label: "Avec de l'incompréhension", next: "bubble_confused_dist" }
      ]},
      { id: "bubble_abandoned", type: "entity-bubble", content: "Ressentir un abandon fait très mal. Et en même temps, il est possible que l'autre traverse quelque chose.", next: "game" },
      { id: "bubble_sad_dist", type: "entity-bubble", content: "Cette tristesse dit que cette amitié comptait vraiment. C'est réel.", next: "game" },
      { id: "bubble_angry_dist", type: "entity-bubble", content: "La colère dit : j'avais des attentes, et elles n'ont pas été honorées. C'est juste.", next: "game" },
      { id: "bubble_confused_dist", type: "entity-bubble", content: "L'incompréhension est souvent le début — avant de comprendre ce qui s'est vraiment passé.", next: "game" },
      { id: "game", type: "interaction", content: "Réchauffe ce lien qui s'est refroidi. Même de loin, ça peut se sentir.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Les amitiés traversent des saisons. Certaines hibernent et reviennent. D'autres non. Les deux sont possibles.", next: "formula" },
      { id: "formula", type: "formula", content: "Les amitiés changent. Elles ne meurent pas toujours.", next: "action" },
      { id: "action", type: "action", content: "Un signe de vie vers cet ami — un message simple. Sans attente de retour. Juste pour toi.", next: null }
    ]}
  ],

  luna: [
    { id: "luna_p1", title: "Quand je ne me sens pas assez bien", subtitle: "Retrouver sa valeur intérieure", magicFormula: "Je suis assez. Exactement comme je suis maintenant.", steps: [
      { id: "start", type: "entity-intro", content: "Ce sentiment de ne pas être assez... je le connais bien.", next: "q1" },
      { id: "q1", type: "question", content: "Pas assez par rapport à quoi exactement ?", options: [
        { label: "Par rapport aux autres élèves", next: "bubble_classmates" },
        { label: "Par rapport à ce qu'on attend de moi", next: "bubble_expectations" },
        { label: "Par rapport à ce que je voudrais être", next: "bubble_ideal" },
        { label: "Je sais pas, c'est juste là", next: "bubble_vague" }
      ]},
      { id: "bubble_classmates", type: "entity-bubble", content: "Comparer à ses camarades — c'est presque inévitable à l'école. Mais tu ne vois que leur surface.", next: "q2" },
      { id: "bubble_expectations", type: "entity-bubble", content: "Essayer de correspondre à ce qu'on attend de toi est épuisant. Et parfois ces attentes ne sont pas les tiennes.", next: "q2" },
      { id: "bubble_ideal", type: "entity-bubble", content: "Se comparer à qui on voudrait être — c'est avoir de l'ambition. Mais l'écart entre les deux peut faire mal.", next: "q2" },
      { id: "bubble_vague", type: "entity-bubble", content: "Parfois le sentiment d'insuffisance est là sans raison précise. Il n'a pas besoin d'une raison pour être réel.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que quelqu'un t'a dit ou laissé entendre que tu n'étais pas assez bien ?", options: [
        { label: "Oui, quelqu'un me l'a dit", next: "bubble_told" },
        { label: "Personne, c'est dans ma tête", next: "bubble_internal" },
        { label: "Pas directement, mais ça se sent", next: "bubble_implicit" }
      ]},
      { id: "bubble_told", type: "entity-bubble", content: "Ce que quelqu'un t'a dit ne définit pas ta valeur réelle. Regardons ce que tu sais de toi-même.", next: "game" },
      { id: "bubble_internal", type: "entity-bubble", content: "La voix intérieure qui dit que tu n'es pas assez — d'où vient-elle ? Elle a souvent tort.", next: "game" },
      { id: "bubble_implicit", type: "entity-bubble", content: "Les messages implicites peuvent faire autant de mal que les mots directs. Tu mérites mieux.", next: "game" },
      { id: "game", type: "interaction", content: "Oriente la lumière vers ton reflet. Elle vient de toi.", gameId: "MirrorLight", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu viens de voir ta propre lumière. Elle a toujours été là — elle attendait juste qu'on la voie.", next: "formula" },
      { id: "formula", type: "formula", content: "Je suis assez. Exactement comme je suis maintenant.", next: "action" },
      { id: "action", type: "action", content: "Ce soir, dis cette formule à ton reflet. Même si c'est difficile. Même tout bas.", next: null }
    ]},
    { id: "luna_p2", title: "Quand j'ai honte de quelque chose", subtitle: "Transformer la honte en apprentissage", magicFormula: "Ma honte me dit que je tiens à bien faire. C'est une force.", steps: [
      { id: "start", type: "entity-intro", content: "La honte est lourde à porter. On ne la porte pas seul.", next: "q1" },
      { id: "q1", type: "question", content: "De quoi as-tu honte ?", options: [
        { label: "Quelque chose que j'ai dit", next: "bubble_said" },
        { label: "Quelque chose que j'ai fait", next: "bubble_done_shame" },
        { label: "Quelque chose qui me concerne", next: "bubble_about_me" },
        { label: "Je préfère pas dire", next: "bubble_private_shame" }
      ]},
      { id: "bubble_said", type: "entity-bubble", content: "Avoir honte de quelque chose qu'on a dit veut dire qu'on regrette — et qu'on sait ce qui est mieux.", next: "q2" },
      { id: "bubble_done_shame", type: "entity-bubble", content: "Avoir honte d'un acte, c'est avoir une conscience. C'est une force, même si ça fait mal.", next: "q2" },
      { id: "bubble_about_me", type: "entity-bubble", content: "Avoir honte de quelque chose qui nous concerne personnellement — c'est souvent injuste envers soi-même.", next: "q2" },
      { id: "bubble_private_shame", type: "entity-bubble", content: "Tu n'as pas à dire quoi. On peut travailler sur la honte sans la nommer.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que tu en as parlé à quelqu'un ?", options: [
        { label: "Non, jamais", next: "bubble_never_told" },
        { label: "Oui, à quelqu'un de confiance", next: "bubble_told_shame" },
        { label: "Je peux pas en parler", next: "bubble_cant_tell" }
      ]},
      { id: "bubble_never_told", type: "entity-bubble", content: "La honte grandit dans le silence. La lumière la rétrécit — même une petite lumière.", next: "game" },
      { id: "bubble_told_shame", type: "entity-bubble", content: "Tu as déjà fait quelque chose de courageux. Parlons maintenant à toi-même.", next: "game" },
      { id: "bubble_cant_tell", type: "entity-bubble", content: "Certaines hontes semblent trop grandes à dire. Un professionnel peut t'aider — médecin, psychologue scolaire.", next: "game" },
      { id: "game", type: "interaction", content: "Dirige la lumière sur ce que tu veux apprivoiser. Regardé en face, ça perd de sa puissance.", gameId: "MirrorLight", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ta honte dit que tu tiens à bien faire. C'est précieux. On peut la transformer en élan.", next: "formula" },
      { id: "formula", type: "formula", content: "Ma honte me dit que je tiens à bien faire. C'est une force.", next: "action" },
      { id: "action", type: "action", content: "Dis cette chose à quelqu'un de confiance cette semaine. Juste une fois. Ça allège.", next: null }
    ]},
    { id: "luna_p3", title: "Quand je compare sans arrêt", subtitle: "Sortir du piège de la comparaison", magicFormula: "Je suis sur mon propre chemin. Pas sur celui des autres.", steps: [
      { id: "start", type: "entity-intro", content: "La comparaison est un piège — on compare notre intérieur à l'extérieur des autres.", next: "q1" },
      { id: "q1", type: "question", content: "Tu te compares surtout à qui ?", options: [
        { label: "Des amis ou camarades de classe", next: "bubble_peers_comp" },
        { label: "Des frères et sœurs", next: "bubble_siblings_comp" },
        { label: "Des gens sur les écrans", next: "bubble_social_media" },
        { label: "Un peu tout le monde", next: "bubble_everyone" }
      ]},
      { id: "bubble_peers_comp", type: "entity-bubble", content: "Les camarades semblent toujours avoir quelque chose qu'on n'a pas. Mais tu ne vois que ce qu'ils montrent.", next: "q2" },
      { id: "bubble_siblings_comp", type: "entity-bubble", content: "Se comparer à un frère ou une sœur est particulièrement douloureux. On attend d'être vu pour soi.", next: "q2" },
      { id: "bubble_social_media", type: "entity-bubble", content: "Les écrans montrent une version choisie, arrangée, filtrée de la réalité. Personne ne ressemble vraiment à ça.", next: "q2" },
      { id: "bubble_everyone", type: "entity-bubble", content: "Se comparer à tout le monde en permanence est épuisant. Concentrons-nous sur toi, juste toi.", next: "q2" },
      { id: "q2", type: "question", content: "Quand tu te compares, qu'est-ce qui manque chez toi selon toi ?", options: [
        { label: "Des capacités ou résultats", next: "bubble_abilities" },
        { label: "Un physique ou une apparence", next: "bubble_looks" },
        { label: "Une popularité ou des amis", next: "bubble_popularity" },
        { label: "Une vie qui semble plus facile", next: "bubble_easier_life" }
      ]},
      { id: "bubble_abilities", type: "entity-bubble", content: "Chaque personne a ses forces. Les siennes sont visibles. Les tiennes aussi — même si tu les vois moins.", next: "game" },
      { id: "bubble_looks", type: "entity-bubble", content: "L'apparence est ce qu'on voit en premier — mais c'est rarement ce qui compte le plus.", next: "game" },
      { id: "bubble_popularity", type: "entity-bubble", content: "La popularité n'est pas la même chose que d'être aimé vraiment. Les deux sont très différents.", next: "game" },
      { id: "bubble_easier_life", type: "entity-bubble", content: "Tout le monde a des difficultés cachées. La vie des autres est rarement aussi facile qu'elle en a l'air.", next: "game" },
      { id: "game", type: "interaction", content: "Mets dans le bocal tes réussites à toi — rien que les tiennes.", gameId: "VictoryJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu as ton propre bocal. Il n'est pas vide. Et il est le tien.", next: "formula" },
      { id: "formula", type: "formula", content: "Je suis sur mon propre chemin. Pas sur celui des autres.", next: "action" },
      { id: "action", type: "action", content: "Cette semaine, note une chose que TOI tu as réussi. Chaque jour. Juste pour toi.", next: null }
    ]},
    { id: "luna_p4", title: "Quand j'ai peur d'essayer", subtitle: "Oser malgré la peur de rater", magicFormula: "Essayer, même en ratant, c'est déjà réussir quelque chose.", steps: [
      { id: "start", type: "entity-intro", content: "Il y a quelque chose que tu veux essayer mais tu n'oses pas ?", next: "q1" },
      { id: "q1", type: "question", content: "C'est quoi cette chose que tu n'oses pas essayer ?", options: [
        { label: "Une activité ou un sport", next: "bubble_activity_luna" },
        { label: "Parler à quelqu'un", next: "bubble_talk" },
        { label: "Montrer quelque chose que j'ai créé", next: "bubble_show" },
        { label: "Quelque chose à l'école", next: "bubble_school_luna" }
      ]},
      { id: "bubble_activity_luna", type: "entity-bubble", content: "Essayer une nouvelle activité, c'est s'exposer au regard des autres et à l'échec possible. C'est courageux juste d'y penser.", next: "q2" },
      { id: "bubble_talk", type: "entity-bubble", content: "Parler à quelqu'un pour la première fois demande beaucoup. Et ça vaut presque toujours le coup.", next: "q2" },
      { id: "bubble_show", type: "entity-bubble", content: "Montrer ce qu'on a créé, c'est montrer une partie de soi. C'est vulnérable et courageux.", next: "q2" },
      { id: "bubble_school_luna", type: "entity-bubble", content: "À l'école on est souvent jugé — c'est difficile de prendre des risques dans cet environnement.", next: "q2" },
      { id: "q2", type: "question", content: "Qu'est-ce qui te retient surtout ?", options: [
        { label: "La peur de rater", next: "bubble_fail_fear" },
        { label: "La peur du regard des autres", next: "bubble_judgment" },
        { label: "La peur de ne pas être assez bon", next: "bubble_not_good" },
        { label: "Je sais pas par où commencer", next: "bubble_where_start" }
      ]},
      { id: "bubble_fail_fear", type: "entity-bubble", content: "Rater fait partie d'apprendre. Tout le monde rate — même les meilleurs dans leur domaine.", next: "game" },
      { id: "bubble_judgment", type: "entity-bubble", content: "Le regard des autres fait peur. Mais dans la vraie vie, ils pensent surtout à eux-mêmes.", next: "game" },
      { id: "bubble_not_good", type: "entity-bubble", content: "Personne n'est assez bon la première fois. C'est pour ça qu'on essaie — pour le devenir.", next: "game" },
      { id: "bubble_where_start", type: "entity-bubble", content: "La première étape est toujours la plus difficile. On va construire un bouclier pour elle.", next: "game" },
      { id: "game", type: "interaction", content: "Construis ton bouclier. Il te protège pendant l'essai — pas pendant la réussite, pendant l'essai.", gameId: "CourageShield", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Le bouclier n'empêche pas de tomber. Il aide à se relever. Et se relever, c'est réussir.", next: "formula" },
      { id: "formula", type: "formula", content: "Essayer, même en ratant, c'est déjà réussir quelque chose.", next: "action" },
      { id: "action", type: "action", content: "Essaie cette chose — juste une fois — cette semaine. Juste une fois.", next: null }
    ]},
    { id: "luna_p5", title: "Apprendre à se féliciter", subtitle: "Être son propre meilleur ami", magicFormula: "Je mérite ma propre gentillesse.", steps: [
      { id: "start", type: "entity-intro", content: "Tu es gentil avec tes amis. L'es-tu autant avec toi-même ?", next: "q1" },
      { id: "q1", type: "question", content: "Quand tu rates quelque chose, tu te dis quoi ?", options: [
        { label: "Des choses dures sur moi", next: "bubble_harsh" },
        { label: "Que je ne méritais pas de réussir", next: "bubble_deserve" },
        { label: "J'essaie de pas y penser", next: "bubble_avoids_self" },
        { label: "Je suis plutôt indulgent", next: "bubble_kind_self" }
      ]},
      { id: "bubble_harsh", type: "entity-bubble", content: "Tu ne dirais jamais ces choses à un ami. Pourquoi les accepter de toi-même ?", next: "q2" },
      { id: "bubble_deserve", type: "entity-bubble", content: "Penser qu'on ne mérite pas de réussir — c'est une croyance, pas une vérité. On va la remettre en question.", next: "q2" },
      { id: "bubble_avoids_self", type: "entity-bubble", content: "Éviter d'y penser protège un temps. Mais ça laisse la blessure sans soin.", next: "q2" },
      { id: "bubble_kind_self", type: "entity-bubble", content: "Être indulgent avec soi-même — c'est une vraie compétence. On va la renforcer.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que tu te rappelles de tes réussites ou tu les oublies vite ?", options: [
        { label: "Je les oublie très vite", next: "bubble_forgets" },
        { label: "Je m'en souviens mais je minimise", next: "bubble_minimizes" },
        { label: "J'ai du mal à y croire", next: "bubble_disbelieves" }
      ]},
      { id: "bubble_forgets", type: "entity-bubble", content: "Le cerveau garde les erreurs et oublie les réussites. C'est une tendance naturelle — mais on peut la corriger.", next: "game" },
      { id: "bubble_minimizes", type: "entity-bubble", content: "Minimiser ses réussites, c'est se voler quelque chose qu'on a mérité.", next: "game" },
      { id: "bubble_disbelieves", type: "entity-bubble", content: "Avoir du mal à croire en ses propres réussites — c'est courant. Mais elles sont réelles.", next: "game" },
      { id: "game", type: "interaction", content: "Envoie de la lumière à ton reflet. Il la mérite autant que n'importe qui.", gameId: "MirrorLight", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu viens de te traiter avec douceur. C'était comment ?", next: "formula" },
      { id: "formula", type: "formula", content: "Je mérite ma propre gentillesse.", next: "action" },
      { id: "action", type: "action", content: "Ce soir, dis-toi une chose que tu as bien faite aujourd'hui. Une seule suffit.", next: null }
    ]}
  ],

  amora: [
    { id: "amora_p1", title: "Quand j'aime trop fort", subtitle: "Aimer sans se perdre", magicFormula: "J'aime fort. Et je reste moi en même temps.", steps: [
      { id: "start", type: "entity-intro", content: "Ton amour est grand. Parfois trop grand pour tenir dans ta poitrine.", next: "q1" },
      { id: "q1", type: "question", content: "Cet amour trop fort, c'est pour qui ?", options: [
        { label: "Un parent ou un adulte de la famille", next: "bubble_parent" },
        { label: "Un ami très proche", next: "bubble_friend_love" },
        { label: "Quelqu'un que j'aime autrement", next: "bubble_crush" },
        { label: "Je préfère pas dire", next: "bubble_private_love" }
      ]},
      { id: "bubble_parent", type: "entity-bubble", content: "L'amour pour un parent est souvent immense et compliqué. Il peut faire très mal aussi.", next: "q2" },
      { id: "bubble_friend_love", type: "entity-bubble", content: "Aimer un ami très fort, c'est avoir trouvé quelqu'un de précieux. Et parfois c'est effrayant.", next: "q2" },
      { id: "bubble_crush", type: "entity-bubble", content: "Ces sentiments sont réels et importants. Ils méritent d'être traités avec soin.", next: "q2" },
      { id: "bubble_private_love", type: "entity-bubble", content: "Tu n'as pas à dire qui. On peut travailler sur ce que tu ressens sans le nommer.", next: "q2" },
      { id: "q2", type: "question", content: "Quand tu aimes trop fort, qu'est-ce qui se passe ?", options: [
        { label: "J'ai peur de perdre l'autre", next: "bubble_fear_lose" },
        { label: "J'oublie de penser à moi", next: "bubble_forgets_self" },
        { label: "Je suis très sensible à tout", next: "bubble_sensitive" },
        { label: "Je veux être tout le temps avec lui", next: "bubble_clingy" }
      ]},
      { id: "bubble_fear_lose", type: "entity-bubble", content: "La peur de perdre vient de l'importance de ce qu'on a. C'est une preuve d'amour — mais elle peut aussi peser.", next: "game" },
      { id: "bubble_forgets_self", type: "entity-bubble", content: "S'oublier pour l'autre, c'est aimer généreusement. Mais toi aussi tu comptes dans cette histoire.", next: "game" },
      { id: "bubble_sensitive", type: "entity-bubble", content: "Être très sensible quand on aime fort, c'est normal. L'amour ouvre le cœur — à la joie et à la douleur.", next: "game" },
      { id: "bubble_clingy", type: "entity-bubble", content: "Vouloir être tout le temps avec quelqu'un qu'on aime — c'est humain. Mais l'amour a aussi besoin d'espace.", next: "game" },
      { id: "game", type: "interaction", content: "Réchauffe ce cœur — le tien d'abord, puis celui de l'autre.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ton cœur a besoin d'être rempli par toi aussi. Pas seulement par l'autre.", next: "formula" },
      { id: "formula", type: "formula", content: "J'aime fort. Et je reste moi en même temps.", next: "action" },
      { id: "action", type: "action", content: "Fais une chose pour toi aujourd'hui. Pas pour l'autre. Juste pour toi.", next: null }
    ]},
    { id: "amora_p2", title: "Quand j'ai peur de perdre quelqu'un", subtitle: "Vivre avec la peur de la perte", magicFormula: "L'amour que j'ai donné reste, même si l'autre s'en va.", steps: [
      { id: "start", type: "entity-intro", content: "Avoir peur de perdre quelqu'un, c'est une preuve de l'importance de ce lien.", next: "q1" },
      { id: "q1", type: "question", content: "Cette peur de perdre, elle concerne qui ?", options: [
        { label: "Un parent ou adulte de la famille", next: "bubble_parent_fear" },
        { label: "Un ami très proche", next: "bubble_friend_fear" },
        { label: "Quelqu'un de malade", next: "adult_sick" },
        { label: "Je préfère pas dire", next: "bubble_private_fear" }
      ]},
      { id: "bubble_parent_fear", type: "entity-bubble", content: "Avoir peur de perdre un parent — c'est une peur profonde et naturelle.", next: "q2" },
      { id: "bubble_friend_fear", type: "entity-bubble", content: "La peur de perdre un ami très proche dit à quel point ce lien est précieux.", next: "q2" },
      { id: "adult_sick", type: "adult-alert", title: "Parler à un adulte peut t'aider", content: "Quand quelqu'un qu'on aime est malade, c'est très difficile à porter seul. Un adulte de confiance peut t'accompagner.", next: "q2", btnLabel: "Je vais en parler →" },
      { id: "bubble_private_fear", type: "entity-bubble", content: "Tu n'as pas à dire qui. On peut travailler sur la peur sans la nommer.", next: "q2" },
      { id: "q2", type: "question", content: "Cette peur, elle se manifeste comment ?", options: [
        { label: "Je vérifie souvent que l'autre va bien", next: "bubble_checks" },
        { label: "Je fais tout pour lui plaire", next: "bubble_pleases" },
        { label: "J'évite de trop m'attacher", next: "bubble_avoids_attach" },
        { label: "Je pense au pire", next: "bubble_worst" }
      ]},
      { id: "bubble_checks", type: "entity-bubble", content: "Vérifier que l'autre va bien — c'est de l'amour. Mais ça peut aussi épuiser les deux.", next: "game" },
      { id: "bubble_pleases", type: "entity-bubble", content: "Faire tout pour plaire pour éviter de perdre l'autre — c'est se perdre un peu soi-même.", next: "game" },
      { id: "bubble_avoids_attach", type: "entity-bubble", content: "Éviter de s'attacher pour ne pas souffrir — c'est se protéger. Mais ça empêche aussi d'aimer pleinement.", next: "game" },
      { id: "bubble_worst", type: "entity-bubble", content: "Imaginer le pire, c'est le cerveau qui essaie de se préparer. Mais ça épuise pour rien.", next: "game" },
      { id: "game", type: "interaction", content: "Réchauffe ton cœur. Il a le droit d'aimer malgré la peur.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Aimer malgré la peur — c'est du vrai courage.", next: "formula" },
      { id: "formula", type: "formula", content: "L'amour que j'ai donné reste, même si l'autre s'en va.", next: "action" },
      { id: "action", type: "action", content: "Dis à cette personne quelque chose de vrai aujourd'hui. Une chose vraie.", next: null }
    ]},
    { id: "amora_p3", title: "L'amour de soi", subtitle: "Devenir son propre meilleur soutien", magicFormula: "Je m'aime assez pour prendre soin de moi.", steps: [
      { id: "start", type: "entity-intro", content: "Est-ce que tu t'aimes, toi ?", next: "q1" },
      { id: "q1", type: "question", content: "Quand tu penses à toi, tu te vois plutôt comment ?", options: [
        { label: "Avec de la tendresse", next: "bubble_tender" },
        { label: "Avec de la critique", next: "bubble_critical" },
        { label: "Avec de l'indifférence", next: "bubble_indifferent" },
        { label: "Je n'y pense pas trop", next: "bubble_no_think" }
      ]},
      { id: "bubble_tender", type: "entity-bubble", content: "Se voir avec tendresse — c'est une vraie force. On va la cultiver.", next: "q2" },
      { id: "bubble_critical", type: "entity-bubble", content: "Être critique envers soi-même tout le temps est épuisant. Cette voix mérite d'être questionnée.", next: "q2" },
      { id: "bubble_indifferent", type: "entity-bubble", content: "L'indifférence envers soi peut cacher une douleur. On va regarder ça ensemble.", next: "q2" },
      { id: "bubble_no_think", type: "entity-bubble", content: "Ne pas penser à soi, c'est parfois se mettre en dernier. Tu mérites ta propre attention.", next: "q2" },
      { id: "q2", type: "question", content: "Prendre soin de toi, ça ressemble à quoi dans ta vie ?", options: [
        { label: "Pas grand chose pour l'instant", next: "bubble_nothing_self" },
        { label: "Me reposer quand je suis fatigué", next: "bubble_rest" },
        { label: "Faire ce que j'aime", next: "bubble_enjoy" },
        { label: "Passer du temps seul", next: "bubble_alone_self" }
      ]},
      { id: "bubble_nothing_self", type: "entity-bubble", content: "Pas encore — c'est là qu'on commence. Prendre soin de soi n'est pas égoïste.", next: "game" },
      { id: "bubble_rest", type: "entity-bubble", content: "Se reposer quand on est fatigué — c'est déjà beaucoup. Et souvent difficile.", next: "game" },
      { id: "bubble_enjoy", type: "entity-bubble", content: "Faire ce qu'on aime — c'est se nourrir. C'est essentiel.", next: "game" },
      { id: "bubble_alone_self", type: "entity-bubble", content: "Choisir d'être seul pour se ressourcer — c'est prendre soin de soi avec intelligence.", next: "game" },
      { id: "game", type: "interaction", content: "Offre de la chaleur à ton propre cœur. Il la mérite autant que ceux que tu aimes.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu viens de prendre soin de toi. Comment c'était ?", next: "formula" },
      { id: "formula", type: "formula", content: "Je m'aime assez pour prendre soin de moi.", next: "action" },
      { id: "action", type: "action", content: "Une chose rien que pour toi aujourd'hui. Un vrai cadeau. Pas pour l'autre — pour toi.", next: null }
    ]},
    { id: "amora_p4", title: "Les disputes avec ceux qu'on aime", subtitle: "La dispute fait partie de l'amour", magicFormula: "On peut se disputer et continuer à s'aimer.", steps: [
      { id: "start", type: "entity-intro", content: "Se disputer avec quelqu'un qu'on aime, ça fait doublement mal.", next: "q1" },
      { id: "q1", type: "question", content: "La dispute, c'était avec qui ?", options: [
        { label: "Un parent", next: "bubble_parent_fight" },
        { label: "Un ami proche", next: "bubble_friend_fight" },
        { label: "Un frère ou une sœur", next: "bubble_sibling_fight" },
        { label: "Quelqu'un d'autre", next: "bubble_other_fight" }
      ]},
      { id: "bubble_parent_fight", type: "entity-bubble", content: "Se disputer avec un parent est particulièrement difficile parce qu'on dépend d'eux et qu'on les aime.", next: "q2" },
      { id: "bubble_friend_fight", type: "entity-bubble", content: "Une dispute avec un ami proche fait mal là où on est le plus ouvert.", next: "q2" },
      { id: "bubble_sibling_fight", type: "entity-bubble", content: "Les frères et sœurs savent comment appuyer là où ça fait mal. Et le lien résiste quand même.", next: "q2" },
      { id: "bubble_other_fight", type: "entity-bubble", content: "Une dispute avec quelqu'un qu'on aime laisse toujours une trace.", next: "q2" },
      { id: "q2", type: "question", content: "Après cette dispute, tu te sens comment ?", options: [
        { label: "Honteux de ce que j'ai dit", next: "bubble_shame_fight" },
        { label: "Encore blessé", next: "bubble_hurt_fight" },
        { label: "Du mal à revenir vers l'autre", next: "bubble_stuck_fight" },
        { label: "Soulagé mais triste", next: "bubble_relief_fight" }
      ]},
      { id: "bubble_shame_fight", type: "entity-bubble", content: "La honte après une dispute dit que tu tiens à bien faire. Ça s'appelle une conscience.", next: "game" },
      { id: "bubble_hurt_fight", type: "entity-bubble", content: "Être encore blessé après une dispute — les deux parties le sont souvent. La blessure mérite du temps.", next: "game" },
      { id: "bubble_stuck_fight", type: "entity-bubble", content: "Du mal à revenir vers l'autre — c'est la blessure qui tient la porte fermée. On va réchauffer ça.", next: "game" },
      { id: "bubble_relief_fight", type: "entity-bubble", content: "Soulagé mais triste — c'est souvent ce qu'on ressent quand quelque chose de vrai s'est dit.", next: "game" },
      { id: "game", type: "interaction", content: "Réchauffe ce lien qui s'est refroidi. Il peut reprendre de la chaleur.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "L'amour résiste aux disputes. Si les deux le veulent.", next: "formula" },
      { id: "formula", type: "formula", content: "On peut se disputer et continuer à s'aimer.", next: "action" },
      { id: "action", type: "action", content: "Un geste de réconciliation. Même petit. Même sans paroles. Ce soir si possible.", next: null }
    ]},
    { id: "amora_p5", title: "Dire je t'aime", subtitle: "Oser montrer son amour", magicFormula: "L'amour qu'on exprime grandit. L'amour qu'on garde rétrécit.", steps: [
      { id: "start", type: "entity-intro", content: "Est-ce que tu dis souvent je t'aime à ceux que tu aimes ?", next: "q1" },
      { id: "q1", type: "question", content: "Pourquoi c'est difficile d'exprimer ton amour ?", options: [
        { label: "Dans ma famille on ne dit pas ces choses", next: "bubble_family_love" },
        { label: "J'ai peur que ce soit pas réciproque", next: "bubble_fear_reciproc" },
        { label: "J'ai peur d'être ridicule", next: "bubble_fear_ridicule" },
        { label: "Je le montre autrement", next: "bubble_shows_actions" }
      ]},
      { id: "bubble_family_love", type: "entity-bubble", content: "Dans certaines familles, l'amour s'exprime par les actes, pas les mots. C'est réel aussi. Mais les mots nourrissent autrement.", next: "q2" },
      { id: "bubble_fear_reciproc", type: "entity-bubble", content: "La peur de ne pas être aimé en retour — c'est une vraie vulnérabilité. Et dire je t'aime reste courageux.", next: "q2" },
      { id: "bubble_fear_ridicule", type: "entity-bubble", content: "Avoir peur d'être ridicule en disant je t'aime — c'est très courant. Et pourtant ces mots changent vraiment les choses.", next: "q2" },
      { id: "bubble_shows_actions", type: "entity-bubble", content: "L'amour par les actes est réel et beau. Les mots peuvent l'accompagner — ils ne le remplacent pas.", next: "q2" },
      { id: "q2", type: "question", content: "À qui tu voudrais dire je t'aime mais tu n'oses pas ?", options: [
        { label: "À un parent", next: "bubble_parent_love" },
        { label: "À un ami", next: "bubble_friend_ily" },
        { label: "À quelqu'un d'autre", next: "bubble_other_ily" },
        { label: "Je préfère pas dire", next: "bubble_private_ily" }
      ]},
      { id: "bubble_parent_love", type: "entity-bubble", content: "Dire je t'aime à un parent peut sembler gênant avec l'âge. Et pourtant ça touche toujours.", next: "game" },
      { id: "bubble_friend_ily", type: "entity-bubble", content: "Dire je t'aime à un ami — dans le sens de : tu comptes vraiment pour moi — c'est un cadeau.", next: "game" },
      { id: "bubble_other_ily", type: "entity-bubble", content: "Ces sentiments sont courageux à ressentir. Encore plus à exprimer.", next: "game" },
      { id: "bubble_private_ily", type: "entity-bubble", content: "Tu n'as pas à dire qui. Ce qui compte c'est de préparer ton cœur à l'exprimer.", next: "game" },
      { id: "game", type: "interaction", content: "Envoie de la chaleur à quelqu'un que tu aimes. Même sans le dire avec des mots — d'abord.", gameId: "HeartWarm", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu viens de lui envoyer quelque chose de vrai. Les mots peuvent venir après.", next: "formula" },
      { id: "formula", type: "formula", content: "L'amour qu'on exprime grandit. L'amour qu'on garde rétrécit.", next: "action" },
      { id: "action", type: "action", content: "Dis je t'aime à quelqu'un aujourd'hui. À ta façon. Un mot, un geste, un message.", next: null }
    ]}
  ],

  philo: [
    { id: "philo_p1", title: "Quand un ami me blesse", subtitle: "Traverser la blessure d'une amitié", magicFormula: "Un ami peut me blesser et rester un ami. Si on en parle.", steps: [
      { id: "start", type: "entity-intro", content: "Un ami t'a dit ou fait quelque chose qui fait encore mal ?", next: "q1" },
      { id: "q1", type: "question", content: "Qu'est-ce qu'il a fait ou dit ?", options: [
        { label: "Il a dit quelque chose de blessant", next: "bubble_said_hurt" },
        { label: "Il m'a exclu ou ignoré", next: "bubble_excluded_philo" },
        { label: "Il a trahi un secret", next: "bubble_betrayed" },
        { label: "Je préfère pas dire", next: "bubble_private_philo" }
      ]},
      { id: "bubble_said_hurt", type: "entity-bubble", content: "Un mot blessant d'un ami fait doublement mal — parce qu'on lui faisait confiance.", next: "q2" },
      { id: "bubble_excluded_philo", type: "entity-bubble", content: "Être ignoré ou exclu par un ami — c'est une des blessures les plus difficiles à comprendre.", next: "q2" },
      { id: "bubble_betrayed", type: "entity-bubble", content: "Trahir un secret, c'est briser quelque chose de fondamental dans une amitié.", next: "q2" },
      { id: "bubble_private_philo", type: "entity-bubble", content: "Tu n'as pas à tout dire. On peut travailler sur la blessure sans la décrire.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que tu lui as dit que tu étais blessé ?", options: [
        { label: "Non, pas encore", next: "bubble_not_told" },
        { label: "Oui, mais ça n'a rien changé", next: "bubble_told_no_change" },
        { label: "Je peux pas lui dire", next: "bubble_cant_tell_philo" }
      ]},
      { id: "bubble_not_told", type: "entity-bubble", content: "Souvent l'autre ne sait pas qu'il a blessé. Lui dire, c'est lui donner la chance de réparer.", next: "game" },
      { id: "bubble_told_no_change", type: "entity-bubble", content: "Si tu as dit et que rien n'a changé — c'est important à prendre en compte pour cette amitié.", next: "game" },
      { id: "bubble_cant_tell_philo", type: "entity-bubble", content: "Parfois dire n'est pas possible. On peut quand même construire les mots pour le jour où.", next: "game" },
      { id: "game", type: "interaction", content: "Pose les bons mots sur le pont entre vous. Les mots qui peuvent réparer.", gameId: "FriendBridge", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ces mots existent maintenant. Tu peux les dire quand tu te sentiras prêt.", next: "formula" },
      { id: "formula", type: "formula", content: "Un ami peut me blesser et rester un ami. Si on en parle.", next: "action" },
      { id: "action", type: "action", content: "Dis-lui une chose vraie sur ce que tu as ressenti. Juste une chose.", next: null }
    ]},
    { id: "philo_p2", title: "Être jaloux d'un ami", subtitle: "Comprendre sa jalousie sans en avoir honte", magicFormula: "Ma jalousie me dit ce que je désire. Pas ce que je vaux.", steps: [
      { id: "start", type: "entity-intro", content: "On peut être jaloux d'un ami et continuer à l'aimer. Les deux à la fois.", next: "q1" },
      { id: "q1", type: "question", content: "Tu es jaloux de quoi chez cet ami ?", options: [
        { label: "Ses résultats ou ses capacités", next: "bubble_abilities_philo" },
        { label: "Sa popularité ou ses amis", next: "bubble_popular_philo" },
        { label: "Son apparence ou ses affaires", next: "bubble_looks_philo" },
        { label: "L'attention qu'il reçoit des adultes", next: "bubble_attention" }
      ]},
      { id: "bubble_abilities_philo", type: "entity-bubble", content: "Être jaloux des capacités de quelqu'un dit souvent qu'on veut développer quelque chose en soi.", next: "q2" },
      { id: "bubble_popular_philo", type: "entity-bubble", content: "La popularité semble tout — mais elle ne dit rien de la qualité des liens.", next: "q2" },
      { id: "bubble_looks_philo", type: "entity-bubble", content: "L'apparence et les affaires sont visibles — et donc faciles à envier. Mais ils ne rendent pas heureux.", next: "q2" },
      { id: "bubble_attention", type: "entity-bubble", content: "Vouloir de l'attention des adultes qu'on aime — c'est un besoin légitime.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que cette jalousie a changé ta façon d'être avec cet ami ?", options: [
        { label: "Oui, je suis moins gentil avec lui", next: "bubble_less_kind" },
        { label: "Je l'évite un peu", next: "bubble_avoids_friend" },
        { label: "Pas vraiment, je gère", next: "bubble_manages" }
      ]},
      { id: "bubble_less_kind", type: "entity-bubble", content: "Être moins gentil à cause de la jalousie — c'est normal et courageux de le reconnaître.", next: "game" },
      { id: "bubble_avoids_friend", type: "entity-bubble", content: "L'éviter pour ne pas ressentir la jalousie — c'est une protection. Mais ça peut abîmer l'amitié.", next: "game" },
      { id: "bubble_manages", type: "entity-bubble", content: "Gérer sa jalousie sans laisser transparaître — c'est déjà beaucoup. On va aller plus loin.", next: "game" },
      { id: "game", type: "interaction", content: "Remplis ton bocal de tes propres richesses — celles que toi tu as.", gameId: "VictoryJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Tu as tes propres trésors. Différents — pas inférieurs.", next: "formula" },
      { id: "formula", type: "formula", content: "Ma jalousie me dit ce que je désire. Pas ce que je vaux.", next: "action" },
      { id: "action", type: "action", content: "Félicite cet ami pour quelque chose. Sincèrement. C'est libérateur.", next: null }
    ]},
    { id: "philo_p3", title: "Faire le premier pas", subtitle: "Oser aller vers quelqu'un", magicFormula: "Le premier pas est petit. L'amitié qui peut naître est grande.", steps: [
      { id: "start", type: "entity-intro", content: "Il y a quelqu'un avec qui tu voudrais être ami mais tu n'oses pas ?", next: "q1" },
      { id: "q1", type: "question", content: "Pourquoi tu n'oses pas faire le premier pas ?", options: [
        { label: "Peur d'être rejeté", next: "bubble_fear_reject" },
        { label: "Je ne sais pas quoi dire", next: "bubble_no_words" },
        { label: "J'ai peur d'avoir l'air ridicule", next: "bubble_ridicule_philo" },
        { label: "Je sais pas s'il voudrait être mon ami", next: "bubble_unsure" }
      ]},
      { id: "bubble_fear_reject", type: "entity-bubble", content: "La peur du rejet est réelle. Et le rejet fait mal. Mais ne pas essayer garantit de ne pas se connecter.", next: "q2" },
      { id: "bubble_no_words", type: "entity-bubble", content: "Ne pas savoir quoi dire — c'est une des choses les plus communes. On va préparer quelques mots simples.", next: "q2" },
      { id: "bubble_ridicule_philo", type: "entity-bubble", content: "Avoir l'air ridicule — et si l'autre ressentait exactement la même chose ?", next: "q2" },
      { id: "bubble_unsure", type: "entity-bubble", content: "On ne sait jamais vraiment avant d'essayer. Et souvent on est agréablement surpris.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce que tu as déjà eu un contact avec cette personne ?", options: [
        { label: "On se connaît un peu, on se voit", next: "bubble_knows_a_bit" },
        { label: "On se croise mais on se parle pas", next: "bubble_sees_not_talks" },
        { label: "Pas encore, c'est quelqu'un de nouveau", next: "bubble_new_person" }
      ]},
      { id: "bubble_knows_a_bit", type: "entity-bubble", content: "Vous avez déjà une base. Le premier pas peut être tout petit — une phrase de plus que d'habitude.", next: "game" },
      { id: "bubble_sees_not_talks", type: "entity-bubble", content: "Se croiser sans se parler — c'est souvent qu'on attend tous les deux. Un sourire ou un regard peut ouvrir.", next: "game" },
      { id: "bubble_new_person", type: "entity-bubble", content: "Quelqu'un de nouveau — tout le monde l'est à un moment. Et tout le monde cherche des liens.", next: "game" },
      { id: "game", type: "interaction", content: "Construis le pont. Le premier fil, c'est toi qui le poses.", gameId: "FriendBridge", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Le pont est construit. Tu n'as qu'à faire un pas dessus.", next: "formula" },
      { id: "formula", type: "formula", content: "Le premier pas est petit. L'amitié qui peut naître est grande.", next: "action" },
      { id: "action", type: "action", content: "Un mot, un sourire, une question. Cette semaine. Le premier fil du lien.", next: null }
    ]},
    { id: "philo_p4", title: "Perdre un ami", subtitle: "Traverser la fin d'une amitié", magicFormula: "Chaque amitié, même finie, m'a appris quelque chose.", steps: [
      { id: "start", type: "entity-intro", content: "Perdre un ami, c'est une vraie douleur. Pas moins réelle que les autres.", next: "q1" },
      { id: "q1", type: "question", content: "Comment cette amitié s'est-elle terminée ?", options: [
        { label: "On s'est disputés et c'est pas réparé", next: "bubble_fight_end" },
        { label: "Il s'est éloigné sans explication", next: "bubble_drifted" },
        { label: "Je l'ai perdu à cause d'un autre", next: "bubble_lost_to_other" },
        { label: "On a changé et on n'est plus pareils", next: "bubble_changed" }
      ]},
      { id: "bubble_fight_end", type: "entity-bubble", content: "Une dispute qui n'a pas été réparée — c'est souvent que les deux côtés attendaient que l'autre fasse le premier pas.", next: "q2" },
      { id: "bubble_drifted", type: "entity-bubble", content: "S'éloigner sans explication est l'une des fins les plus difficiles à accepter — parce qu'on ne comprend pas.", next: "q2" },
      { id: "bubble_lost_to_other", type: "entity-bubble", content: "Perdre un ami à cause d'un autre — c'est douloureux. Et parfois injuste.", next: "q2" },
      { id: "bubble_changed", type: "entity-bubble", content: "Changer et ne plus être compatibles — c'est naturel mais ça fait quand même mal.", next: "q2" },
      { id: "q2", type: "question", content: "Comment tu portes cette perte ?", options: [
        { label: "Avec beaucoup de tristesse", next: "bubble_sad_loss" },
        { label: "Avec de la colère", next: "bubble_angry_loss" },
        { label: "Je fais comme si ça allait", next: "bubble_pretends" },
        { label: "Un peu des deux", next: "bubble_both" }
      ]},
      { id: "bubble_sad_loss", type: "entity-bubble", content: "Cette tristesse dit à quel point cette amitié comptait. Elle mérite d'être pleurée.", next: "game" },
      { id: "bubble_angry_loss", type: "entity-bubble", content: "La colère dit qu'on avait des attentes et qu'elles n'ont pas été honorées. C'est juste.", next: "game" },
      { id: "bubble_pretends", type: "entity-bubble", content: "Faire comme si ça allait protège un temps. Mais la perte est là, elle attend.", next: "game" },
      { id: "bubble_both", type: "entity-bubble", content: "Triste et en colère à la fois — les deux ensemble, c'est souvent ce que la vraie perte ressemble.", next: "game" },
      { id: "game", type: "interaction", content: "Laisse sortir ce que tu portes de cette amitié perdue.", gameId: "TearJar", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Ce que vous avez vécu ensemble a existé. Ça ne disparaît pas avec la fin.", next: "formula" },
      { id: "formula", type: "formula", content: "Chaque amitié, même finie, m'a appris quelque chose.", next: "action" },
      { id: "action", type: "action", content: "Note une chose belle que cette amitié t'a apportée. Juste une. Elle reste à toi.", next: null }
    ]},
    { id: "philo_p5", title: "Être un bon ami", subtitle: "Donner et recevoir dans l'amitié", magicFormula: "Je peux être un bon ami tout en restant moi-même.", steps: [
      { id: "start", type: "entity-intro", content: "Être un bon ami, c'est quelque chose qui s'apprend tout au long de la vie.", next: "q1" },
      { id: "q1", type: "question", content: "Dans une amitié, tu as tendance à plutôt...", options: [
        { label: "Donner beaucoup et recevoir peu", next: "bubble_gives_more" },
        { label: "Attendre que l'autre fasse le premier pas", next: "bubble_waits" },
        { label: "Être là dans les moments difficiles", next: "bubble_present" },
        { label: "Éviter les conflits à tout prix", next: "bubble_avoids_conflict" }
      ]},
      { id: "bubble_gives_more", type: "entity-bubble", content: "Donner beaucoup — c'est généreux. Mais si tu reçois peu, c'est un déséquilibre à regarder.", next: "q2" },
      { id: "bubble_waits", type: "entity-bubble", content: "Attendre que l'autre fasse le premier pas — par timidité ou par peur. C'est humain mais ça peut créer de la distance.", next: "q2" },
      { id: "bubble_present", type: "entity-bubble", content: "Être là dans les moments difficiles — c'est l'une des choses les plus précieuses qu'un ami puisse faire.", next: "q2" },
      { id: "bubble_avoids_conflict", type: "entity-bubble", content: "Éviter les conflits à tout prix — c'est souvent se perdre un peu pour ne pas perdre l'autre.", next: "q2" },
      { id: "q2", type: "question", content: "Est-ce qu'il y a quelque chose que tu voudrais améliorer dans ta façon d'être ami ?", options: [
        { label: "Être plus présent", next: "bubble_more_present" },
        { label: "Oser dire les choses difficiles", next: "bubble_more_honest" },
        { label: "Prendre plus soin de moi aussi", next: "bubble_self_care_philo" },
        { label: "Je ne sais pas trop", next: "bubble_unsure_philo" }
      ]},
      { id: "bubble_more_present", type: "entity-bubble", content: "La présence — c'est souvent tout ce qu'on demande à un ami. Juste être là.", next: "game" },
      { id: "bubble_more_honest", type: "entity-bubble", content: "Dire les choses difficiles avec douceur — c'est un cadeau rare dans une amitié.", next: "game" },
      { id: "bubble_self_care_philo", type: "entity-bubble", content: "Prendre soin de soi pour mieux prendre soin de l'autre — c'est de la sagesse.", next: "game" },
      { id: "bubble_unsure_philo", type: "entity-bubble", content: "Ne pas savoir — c'est déjà une forme d'honnêteté envers soi-même.", next: "game" },
      { id: "game", type: "interaction", content: "Renforce le pont. Chaque mot que tu poses compte.", gameId: "FriendBridge", next: "after_game" },
      { id: "after_game", type: "entity-bubble", content: "Les bons amis ne sont pas parfaits. Ils sont présents et sincères.", next: "formula" },
      { id: "formula", type: "formula", content: "Je peux être un bon ami tout en restant moi-même.", next: "action" },
      { id: "action", type: "action", content: "Fais une chose pour un ami aujourd'hui. Sans attendre de retour. Juste parce que.", next: null }
    ]}
  ]

}
