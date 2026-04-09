// ============================================================
// MAGIC MILO V2 — Routes Premium complètes
// 5 entités existantes × 5 routes + Luna × 5 routes
// ============================================================

export const premiumRoutes = {

  // ──────────────────────────────────────────────────────────
  // BRUMO — Peur & Angoisse
  // ──────────────────────────────────────────────────────────
  brumo: [
    {
      id: "brumo_premium_1",
      title: "Quand mon cœur bat trop vite",
      subtitle: "Apprendre à calmer son corps de l'intérieur",
      promise: "Aider l'enfant à reconnaître les signaux physiques de l'anxiété et à les apprivoiser doucement",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "mini-game", "transition", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "brumo",
          content: "Brumo est là. Pose ta main sur ta poitrine si tu veux. On respire ensemble."
        },
        {
          type: "message",
          content: "Parfois le corps s'emballe. Le cœur bat fort, les mains deviennent moites. C'est lui qui essaie de te protéger."
        },
        {
          type: "question",
          content: "Là, dans ton corps, qu'est-ce que tu ressens ?",
          options: ["Le cœur qui bat fort", "Le ventre qui se serre", "Les jambes qui veulent partir", "Tout en même temps"]
        },
        {
          type: "entity-bubble",
          entity: "brumo",
          content: "Ton corps n'est pas ton ennemi. Il veut juste t'aider, même s'il s'y prend de façon un peu bruyante."
        },
        {
          type: "interaction",
          gameId: "breath-wave",
          content: "Suis la vague avec ton doigt. Inspire quand elle monte. Expire quand elle descend.",
          duration: 4
        },
        {
          type: "message",
          content: "Tu viens de ralentir ton cœur toi-même. Ton corps t'a écouté."
        },
        {
          type: "action",
          content: "Ce soir, si le cœur s'emballe, pose juste une main dessus. Dis-lui : je suis là, on ralentit ensemble."
        }
      ],
      magicFormula: "Mon corps m'écoute. Je peux lui parler.",
      moral: "Les battements forts ne durent jamais très longtemps."
    },
    {
      id: "brumo_premium_2",
      title: "La peur du noir et des bruits",
      subtitle: "Transformer les ombres en amis silencieux",
      promise: "Accompagner l'enfant dans la peur nocturne sans la minimiser",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "full-screen-companion", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "brumo",
          content: "Moi aussi j'aime la nuit. Elle n'est pas vide. Elle est juste… différente."
        },
        {
          type: "question",
          content: "La nuit, ce qui te fait le plus peur c'est :",
          options: ["Les bruits inconnus", "Les ombres sur les murs", "Être seul dans le noir", "Quelque chose que j'imagine"]
        },
        {
          type: "message",
          content: "Les bruits de la nuit, c'est souvent la maison qui respire. Elle aussi, elle se repose."
        },
        {
          type: "interaction",
          gameId: "shadow-friend",
          content: "Donne un nom rigolo à cette ombre. Elle devient ton gardien silencieux de la nuit.",
        },
        {
          type: "entity-bubble",
          entity: "brumo",
          content: "Brumo reste tout près cette nuit. Il aime garder les enfants courageux."
        },
        {
          type: "action",
          content: "Avant de dormir, dis à voix basse : 'La maison veille sur moi. Brumo est là.'"
        }
      ],
      magicFormula: "Je nomme ce qui me fait peur. Et ça devient moins grand.",
      moral: "Le courage, c'est rester même quand on a un peu peur."
    },
    {
      id: "brumo_premium_3",
      title: "Quand je me fais trop de souci",
      subtitle: "Apprendre à ne pas porter les inquiétudes seul",
      promise: "Aider l'enfant à identifier ses pensées anxieuses et à les déposer",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "worry-jar", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "brumo",
          content: "Tu portes beaucoup de choses dans ta tête parfois ? Montre-les moi. On peut les regarder ensemble."
        },
        {
          type: "message",
          content: "Les soucis qu'on garde tout seul dans sa tête deviennent souvent plus gros qu'ils ne sont vraiment."
        },
        {
          type: "question",
          content: "Ton souci du moment, il concerne :",
          options: ["L'école ou les amis", "Ma famille", "Quelque chose que j'ai imaginé", "Je sais pas trop"]
        },
        {
          type: "interaction",
          gameId: "worry-jar",
          content: "Écris ou dessine ton souci et mets-le dans le bocal de Brumo. Il va le garder pour toi cette nuit.",
        },
        {
          type: "message",
          content: "Tu n'as pas besoin de résoudre ça ce soir. Tu peux juste le poser là."
        },
        {
          type: "action",
          content: "Avant de dormir, pense à une chose douce de demain. Juste une petite."
        }
      ],
      magicFormula: "Je pose mon souci. Je n'ai pas besoin de le porter la nuit.",
      moral: "Certaines choses attendent très bien qu'on soit reposé pour y réfléchir."
    },
    {
      id: "brumo_premium_4",
      title: "Quand je dois faire quelque chose qui m'angoisse",
      subtitle: "Préparer son courage avant un moment difficile",
      promise: "Aider l'enfant à anticiper positivement un événement anxiogène",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "courage-shield", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "brumo",
          content: "Il y a quelque chose de difficile qui approche ? Je peux t'aider à te préparer, doucettement."
        },
        {
          type: "question",
          content: "Ce qui m'inquiète le plus dans ce moment, c'est :",
          options: ["Que ça se passe mal", "Le regard des autres", "Que j'oublie tout", "Que ça dure trop longtemps"]
        },
        {
          type: "message",
          content: "Ta peur dit que tu tiens à quelque chose. C'est pour ça qu'elle est là."
        },
        {
          type: "interaction",
          gameId: "courage-shield",
          content: "Choisis 3 mots qui vont avec toi dans ce moment difficile. Ils deviendront ton bouclier doux.",
        },
        {
          type: "entity-bubble",
          entity: "brumo",
          content: "Ces mots, tu peux les murmurer juste avant. Brumo les a soufflés avec toi."
        },
        {
          type: "action",
          content: "Écris tes 3 mots sur un bout de papier et glisse-le dans ta poche."
        }
      ],
      magicFormula: "J'ai ce qu'il faut en moi pour traverser ça.",
      moral: "On peut avoir peur et y aller quand même. C'est ça, le vrai courage."
    },
    {
      id: "brumo_premium_5",
      title: "Quand mon corps se bloque",
      subtitle: "Débloquer le corps quand la peur le paralyse",
      promise: "Accompagner l'enfant dans les réactions de freeze liées à l'anxiété",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "body-scan", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "brumo",
          content: "Parfois la peur fait quelque chose de bizarre : elle fige le corps. Comme une statue. C'est normal."
        },
        {
          type: "message",
          content: "Quand on se sent bloqué, le corps a besoin d'un tout petit mouvement pour se souvenir qu'il peut bouger."
        },
        {
          type: "question",
          content: "Quand tu te bloques, qu'est-ce qui se passe ?",
          options: ["Je ne sais plus quoi dire", "Mes jambes ne bougent plus", "Ma tête devient vide", "Tout en même temps"]
        },
        {
          type: "interaction",
          gameId: "body-scan",
          content: "On va réveiller ton corps tout doucement, partie par partie. Suis les indications de Brumo.",
        },
        {
          type: "entity-bubble",
          entity: "brumo",
          content: "Tu vois ? Le corps se souvient toujours. Il a juste besoin d'un tout petit rappel."
        },
        {
          type: "action",
          content: "Si tu te bloques, remue juste les doigts de pieds. Très discrètement. Ça suffit à débloquer."
        }
      ],
      magicFormula: "Mon corps se souvient. Je peux toujours commencer par un tout petit mouvement.",
      moral: "Un tout petit geste peut déverrouiller beaucoup de choses."
    }
  ],

  // ──────────────────────────────────────────────────────────
  // IGNIS — Colère & Frustration
  // ──────────────────────────────────────────────────────────
  ignis: [
    {
      id: "ignis_premium_1",
      title: "Quand j'explose sans l'avoir voulu",
      subtitle: "Comprendre les déclencheurs de la colère",
      promise: "Aider l'enfant à identifier ce qui allume sa colère avant qu'elle explose",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "fire-meter", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "ignis",
          content: "Salut. Ignis comprend les explosions. Elles arrivent quand on n'a pas vu venir le feu. On va regarder ça ensemble."
        },
        {
          type: "question",
          content: "Avant d'exploser, ton corps te donne des signes ?",
          options: ["Oui mais je les vois trop tard", "Je ne les vois pas du tout", "Je les vois mais je n'arrive pas à m'arrêter", "Parfois oui, parfois non"]
        },
        {
          type: "message",
          content: "La colère s'annonce toujours. Elle monte dans le corps avant d'exploser. On peut apprendre à la voir venir."
        },
        {
          type: "interaction",
          gameId: "fire-meter",
          content: "Choisis ce qui monte ta température : une injustice ? Un 'non' ? Être ignoré ? Regarde ton compteur monter.",
        },
        {
          type: "entity-bubble",
          entity: "ignis",
          content: "Ignis dit : quand tu sens la chaleur monter à 7 ou 8, c'est le moment de faire quelque chose. Pas à 10."
        },
        {
          type: "action",
          content: "La prochaine fois, surveille ta température intérieure. À 7, dis-toi : 'J'ai encore le choix de comment je réagis.'"
        }
      ],
      magicFormula: "Je sens la colère monter. J'ai encore le choix.",
      moral: "La colère n'est pas mauvaise. C'est ce qu'on en fait qui compte."
    },
    {
      id: "ignis_premium_2",
      title: "Quand on m'a dit quelque chose de blessant",
      subtitle: "Transformer les mots blessants en force",
      promise: "Aider l'enfant à traiter la blessure émotionnelle causée par les mots des autres",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "word-shield", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "ignis",
          content: "Les mots peuvent brûler autant que le feu. Ignis sait ça. Et il sait aussi comment les éteindre."
        },
        {
          type: "question",
          content: "Ce mot ou cette phrase qui t'a blessé, il venait de :",
          options: ["Un ami ou camarade", "Un adulte", "Quelqu'un de ma famille", "Plusieurs personnes"]
        },
        {
          type: "message",
          content: "Les gens qui blessent avec des mots parlent souvent de leur propre douleur, pas vraiment de toi."
        },
        {
          type: "interaction",
          gameId: "word-shield",
          content: "Ce mot qui t'a blessé, mets-le dans le bouclier d'Ignis. Il le transforme en étincelle qui te protège.",
        },
        {
          type: "entity-bubble",
          entity: "ignis",
          content: "Tu n'as pas à croire tout ce qu'on dit de toi."
        },
        {
          type: "action",
          content: "Dis à voix haute une chose vraie et belle sur toi. Juste une. C'est ta vérité à toi."
        }
      ],
      magicFormula: "Ce qu'on dit de moi ne définit pas qui je suis.",
      moral: "Tu es toujours plus que les mots que les autres choisissent pour toi."
    },
    {
      id: "ignis_premium_3",
      title: "Quand tout semble injuste",
      subtitle: "Apprivoiser le sentiment d'injustice",
      promise: "Accompagner l'enfant dans le sentiment d'injustice sans le nier ni le gonfler",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "balance-scale", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "ignis",
          content: "L'injustice, c'est du feu aussi. Et souvent, c'est un feu qui a une bonne raison d'exister."
        },
        {
          type: "question",
          content: "Ce qui est injuste dans cette situation, c'est :",
          options: ["On ne m'a pas écouté", "Les règles ne sont pas pareilles pour tout le monde", "J'ai été accusé à tort", "Quelqu'un a eu ce que je méritais"]
        },
        {
          type: "message",
          content: "Ressentir l'injustice, ça veut dire que tu as un sens moral fort. C'est précieux."
        },
        {
          type: "interaction",
          gameId: "balance-scale",
          content: "Mets d'un côté ce qui est injuste. De l'autre, ce que tu peux faire avec ça. Equilibre la balance.",
        },
        {
          type: "action",
          content: "Y a-t-il une chose que tu peux faire ou dire pour remettre un peu d'équilibre ? Si oui, note-la. Si non, tu as le droit de juste le savoir."
        }
      ],
      magicFormula: "Je sens l'injustice. Et je cherche ce que je peux en faire.",
      moral: "Parfois la vie n'est pas juste. Mais on peut toujours choisir comment on se tient face à ça."
    },
    {
      id: "ignis_premium_4",
      title: "Quand je veux tout casser",
      subtitle: "Trouver des sorties saines pour une énergie très forte",
      promise: "Aider l'enfant à canaliser une colère intense de façon corporelle et sécurisante",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "energy-release", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "ignis",
          content: "Ignis comprend. Parfois le feu est si fort qu'on a besoin de faire quelque chose avec son corps."
        },
        {
          type: "message",
          content: "Quand la colère est très physique, le corps a besoin de bouger. Ce n'est pas une mauvaise chose."
        },
        {
          type: "question",
          content: "Ce que ton corps voudrait faire là :",
          options: ["Taper dans quelque chose", "Crier très fort", "Courir", "Tout en même temps"]
        },
        {
          type: "interaction",
          gameId: "energy-release",
          content: "Voilà 3 façons de sortir ce feu sans blesser personne. Choisis et suis les instructions d'Ignis.",
        },
        {
          type: "entity-bubble",
          entity: "ignis",
          content: "Le feu a trouvé un chemin. Tu peux souffler maintenant."
        },
        {
          type: "action",
          content: "Garde une de ces 3 façons en tête pour la prochaine fois. C'est ta sortie de secours à toi."
        }
      ],
      magicFormula: "Mon énergie forte peut trouver un chemin qui ne blesse personne.",
      moral: "La force n'est pas un défaut. C'est quelque chose à apprivoiser."
    },
    {
      id: "ignis_premium_5",
      title: "Après la colère, la réconciliation",
      subtitle: "Savoir revenir vers l'autre après une dispute",
      promise: "Accompagner l'enfant dans le retour à l'autre après un conflit",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "bridge-builder", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "ignis",
          content: "Après le feu, il y a des cendres. Et dans les cendres, on peut retrouver quelque chose de chaud et de doux."
        },
        {
          type: "question",
          content: "Après cette dispute, tu ressens plutôt :",
          options: ["De la honte ou des regrets", "Encore de la colère", "De la tristesse", "L'envie de faire la paix mais je ne sais pas comment"]
        },
        {
          type: "message",
          content: "Revenir vers quelqu'un après une dispute, c'est l'une des choses les plus courageuses qu'on puisse faire."
        },
        {
          type: "interaction",
          gameId: "bridge-builder",
          content: "Construis un pont entre toi et cette personne. Chaque planche est un mot ou un geste que tu pourrais faire.",
        },
        {
          type: "action",
          content: "Tu n'as pas besoin d'un grand discours. Parfois juste 'Je suis là' suffit pour commencer."
        }
      ],
      magicFormula: "Je peux revenir. Et ça ne veut pas dire que j'avais tort de ressentir ce que je ressentais.",
      moral: "La paix qu'on construit après une dispute est souvent plus solide qu'avant."
    }
  ],

  // ──────────────────────────────────────────────────────────
  // PLUMA — Tristesse & Chagrin
  // ──────────────────────────────────────────────────────────
  pluma: [
    {
      id: "pluma_premium_1",
      title: "Quand quelqu'un me manque beaucoup",
      subtitle: "Porter le manque avec douceur",
      promise: "Aider l'enfant à mettre des mots sur le manque d'une personne aimée",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "memory-cloud", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "pluma",
          content: "Pluma connaît très bien le manque. Cette sensation de vouloir quelqu'un qui n'est pas là. On peut en parler."
        },
        {
          type: "question",
          content: "Cette personne qui te manque, elle est absente parce que :",
          options: ["Elle est loin géographiquement", "On s'est éloignés", "Elle est partie pour toujours", "Les choses ont changé entre nous"]
        },
        {
          type: "message",
          content: "Le manque, c'est de l'amour qui ne sait pas où aller. Il est toujours là, même si la personne n'est plus là de la même façon."
        },
        {
          type: "interaction",
          gameId: "memory-cloud",
          content: "Mets dans le nuage de Pluma un souvenir doux avec cette personne. Il sera gardé là, toujours accessible.",
        },
        {
          type: "entity-bubble",
          entity: "pluma",
          content: "Pluma garde les souvenirs précieux dans ses nuages. Ils ne disparaissent jamais vraiment."
        },
        {
          type: "action",
          content: "Ce soir, pense à un moment lumineux avec cette personne. Laisse-toi juste le ressentir, sans le repousser."
        }
      ],
      magicFormula: "Le manque dit que j'aime. Et ça ne s'éteint pas avec le temps.",
      moral: "Ce qui nous a été donné avec amour reste en nous pour toujours."
    },
    {
      id: "pluma_premium_2",
      title: "Quand je pleure sans savoir pourquoi",
      subtitle: "Accueillir les larmes qui arrivent toutes seules",
      promise: "Aider l'enfant à accepter les émotions diffuses sans explication",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "gentle-rain", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "pluma",
          content: "Parfois les larmes arrivent sans prévenir. Sans raison claire. Pluma dit que c'est ok. Vraiment."
        },
        {
          type: "message",
          content: "Les larmes sans explication, c'est souvent le corps qui fait de la place pour quelque chose qu'il n'a pas encore les mots pour dire."
        },
        {
          type: "question",
          content: "Ces larmes, elles ressemblent plutôt à :",
          options: ["Un débordement d'un coup", "Une tristesse douce qui est toujours là", "Quelque chose qui m'a rappelé autre chose", "Je ne sais vraiment pas"]
        },
        {
          type: "interaction",
          gameId: "gentle-rain",
          content: "Laisse la pluie de Pluma tomber doucement. Chaque goutte emporte quelque chose que tu n'avais pas besoin de garder.",
        },
        {
          type: "action",
          content: "Pleure si tu en as envie. Et après, bois quelque chose de chaud. Rien d'autre à faire."
        }
      ],
      magicFormula: "Mes larmes savent quelque chose que ma tête ne sait pas encore.",
      moral: "Pleurer n'est pas une faiblesse. C'est une façon d'être honnête avec soi-même."
    },
    {
      id: "pluma_premium_3",
      title: "Quand la tristesse reste longtemps",
      subtitle: "Vivre avec une tristesse qui ne part pas vite",
      promise: "Accompagner l'enfant dans une tristesse durable sans dramatiser",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "cloud-carrier", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "pluma",
          content: "Il y a des tristesses qui s'en vont vite. Et d'autres qui restent plus longtemps. Les deux sont normales."
        },
        {
          type: "question",
          content: "Cette tristesse, elle est là depuis :",
          options: ["Quelques jours", "Plusieurs semaines", "Très longtemps, je ne sais plus depuis quand", "Elle va et vient"]
        },
        {
          type: "message",
          content: "Une tristesse qui dure longtemps n'est pas une tristesse qui ne finira jamais. Elle a juste besoin de plus de temps."
        },
        {
          type: "entity-bubble",
          entity: "pluma",
          content: "Pluma dit : tu n'as pas à te débarrasser de ta tristesse. Tu peux juste apprendre à marcher avec elle."
        },
        {
          type: "interaction",
          gameId: "cloud-carrier",
          content: "Pluma porte une partie de ta tristesse avec toi aujourd'hui. Tu n'as pas à tout tenir seul.",
        },
        {
          type: "action",
          content: "Parle de cette tristesse qui dure à quelqu'un en qui tu as confiance. Juste une phrase suffit pour commencer."
        }
      ],
      magicFormula: "Ma tristesse ne durera pas toujours. Je peux la porter sans en avoir honte.",
      moral: "Les tristesses longues nous apprennent des choses que les émotions rapides ne peuvent pas nous enseigner."
    },
    {
      id: "pluma_premium_4",
      title: "Quand quelque chose de beau est fini",
      subtitle: "Faire ses adieux avec douceur",
      promise: "Aider l'enfant à vivre la fin d'une chose aimée (une période, une amitié, un animal)",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "goodbye-ritual", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "pluma",
          content: "Les fins font partie de la vie. Et elles font souvent très mal parce que ce qui s'est passé était vraiment bien."
        },
        {
          type: "question",
          content: "Ce qui est terminé et qui me manque :",
          options: ["Une amitié ou une relation", "Un animal que j'aimais", "Une période de ma vie", "Un endroit où j'étais bien"]
        },
        {
          type: "message",
          content: "Dire au revoir à quelque chose, ça ne veut pas dire que ça n'a pas compté. Ça veut dire que ça comptait vraiment."
        },
        {
          type: "interaction",
          gameId: "goodbye-ritual",
          content: "Crée un petit rituel d'adieu avec Pluma. Un geste, un mot, un dessin. Pour honorer ce qui a été.",
        },
        {
          type: "action",
          content: "Garde une trace de ce souvenir, quelque part. Une photo, un dessin, un mot. Pour que ça reste quelque part."
        }
      ],
      magicFormula: "Je dis au revoir avec soin. Parce que c'était important.",
      moral: "Les belles choses qui se terminent laissent toujours quelque chose en nous."
    },
    {
      id: "pluma_premium_5",
      title: "Quand je me sens gris de l'intérieur",
      subtitle: "Retrouver une petite lumière dans les jours sans couleur",
      promise: "Accompagner l'enfant dans les états mous, apathiques, sans joie particulière",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "light-finder", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "pluma",
          content: "Il y a des jours où rien n'est vraiment mal mais rien n'est vraiment bien non plus. Pluma connaît ça."
        },
        {
          type: "message",
          content: "Ces jours gris ne sont pas vides. Ils sont souvent des jours de transition, de préparation à quelque chose."
        },
        {
          type: "question",
          content: "Ce jour gris, il ressemble à :",
          options: ["Tout me semble plat", "Je n'ai envie de rien", "Je ne ressens pas grand chose", "Je vais bien mais je ne suis pas joyeux"]
        },
        {
          type: "interaction",
          gameId: "light-finder",
          content: "Cherche avec Pluma une toute petite lumière dans ce jour gris. Même minuscule. Même banale.",
        },
        {
          type: "entity-bubble",
          entity: "pluma",
          content: "Même les jours gris ont leurs petites lumières. Il faut juste les chercher un peu plus."
        },
        {
          type: "action",
          content: "Fais une seule chose douce pour toi aujourd'hui. Rien de grand. Juste une."
        }
      ],
      magicFormula: "Dans mes jours gris, je cherche une toute petite lumière. Elle est toujours quelque part.",
      moral: "Les jours sans couleur font partie des saisons de la vie. Ils passent."
    }
  ],

  // ──────────────────────────────────────────────────────────
  // NOX — Cauchemars & Peur de la nuit
  // ──────────────────────────────────────────────────────────
  nox: [
    {
      id: "nox_premium_1",
      title: "Quand les pensées tournent avant de dormir",
      subtitle: "Calmer le tourbillon du soir",
      promise: "Aider l'enfant à laisser partir les pensées trop actives du soir",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "thought-catcher", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "nox",
          content: "Nox garde la nuit. Il connaît tous les tourbillons du soir. Il peut t'aider à les ralentir."
        },
        {
          type: "question",
          content: "Le soir, dans ta tête, c'est plutôt :",
          options: ["Des pensées qui sautent partout", "Des inquiétudes qui reviennent", "Des images qui se répètent", "Un mélange de tout ça"]
        },
        {
          type: "message",
          content: "Le cerveau du soir est souvent plus agité que celui du matin. C'est parce qu'il essaie de ranger la journée."
        },
        {
          type: "interaction",
          gameId: "thought-catcher",
          content: "Attrape les pensées lumineuses avec Nox. Les plus lourdes, laisse-les s'éloigner dans le ciel étoilé.",
        },
        {
          type: "entity-bubble",
          entity: "nox",
          content: "Nox dit : une seule pensée à garder pour ce soir. Les autres peuvent attendre demain."
        },
        {
          type: "action",
          content: "Choisis une pensée douce à garder. Laisse les autres dans le ciel de Nox."
        }
      ],
      magicFormula: "Je garde une pensée. Je laisse les autres dormir.",
      moral: "Le cerveau n'a pas besoin de tout résoudre avant de dormir."
    },
    {
      id: "nox_premium_2",
      title: "Rejouer la fin d'un mauvais rêve",
      subtitle: "Transformer un cauchemar en histoire différente",
      promise: "Aider l'enfant à reprendre le contrôle sur ses cauchemars en changeant leur fin",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "dream-rewriter", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "nox",
          content: "Un cauchemar, c'est une histoire qui s'est mal terminée. Mais tu peux en changer la fin. Nox t'apprend comment."
        },
        {
          type: "question",
          content: "Dans ce rêve difficile, qu'est-ce qui faisait le plus peur ?",
          options: ["Quelque chose ou quelqu'un qui me poursuivait", "Un endroit oppressant", "Quelque chose qu'on m'a fait", "Une catastrophe ou un danger"]
        },
        {
          type: "message",
          content: "Le cerveau qui rêve peut être redirigé. C'est possible d'apprendre à changer la fin de ses rêves."
        },
        {
          type: "interaction",
          gameId: "dream-rewriter",
          content: "Raconte la nouvelle fin de ton cauchemar avec Nox. Cette fois, tu choisis comment ça se termine.",
        },
        {
          type: "action",
          content: "Avant de dormir, visualise la nouvelle fin de ce rêve. Nox veille à ce que ton cerveau s'en souvienne."
        }
      ],
      magicFormula: "Je peux changer la fin de mes histoires de nuit. Je suis le gardien de mes rêves.",
      moral: "Les cauchemars perdent de leur pouvoir quand on les regarde en face."
    },
    {
      id: "nox_premium_3",
      title: "Créer son espace de sécurité pour dormir",
      subtitle: "Construire un refuge intérieur pour la nuit",
      promise: "Aider l'enfant à visualiser un espace sûr et apaisant avant de dormir",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "safe-space-builder", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "nox",
          content: "Nox a son propre endroit secret dans la nuit. Un endroit où rien ne peut faire de mal. Il va t'aider à créer le tien."
        },
        {
          type: "question",
          content: "Ton endroit parfaitement sûr ressemblerait à :",
          options: ["Un cocon chaud et doux", "Un endroit dans la nature", "Un château fort ou une forteresse", "Un endroit que je connais dans la vraie vie"]
        },
        {
          type: "message",
          content: "Cet endroit existe dans ta tête. Et tu peux y aller à n'importe quel moment, y compris la nuit."
        },
        {
          type: "interaction",
          gameId: "safe-space-builder",
          content: "Construis ton espace de sécurité avec Nox. Choisis les éléments qui te font te sentir protégé.",
        },
        {
          type: "entity-bubble",
          entity: "nox",
          content: "Nox gardera l'entrée de cet espace. Rien de menaçant n'y entre."
        },
        {
          type: "action",
          content: "Ce soir, avant de fermer les yeux, visite cet endroit dans ta tête. Juste 30 secondes."
        }
      ],
      magicFormula: "Mon espace sûr existe. Je peux y aller quand j'en ai besoin.",
      moral: "Nous avons tous en nous un endroit où nous pouvons toujours aller."
    },
    {
      id: "nox_premium_4",
      title: "Quand je ne veux pas aller dormir",
      subtitle: "Apprivoiser la résistance au sommeil",
      promise: "Accompagner l'enfant qui redoute l'endormissement ou résiste au coucher",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "sleep-ritual", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "nox",
          content: "Ne pas vouloir dormir, ça arrive. Parfois c'est la peur. Parfois c'est juste qu'on n'est pas encore prêt. Nox comprend."
        },
        {
          type: "question",
          content: "Ce qui me retient de dormir, c'est plutôt :",
          options: ["J'ai peur de ce qui peut arriver la nuit", "Je ne veux pas rater quelque chose", "Ma tête ne veut pas s'arrêter", "Je ne sais pas trop"]
        },
        {
          type: "message",
          content: "Le sommeil ne se force pas. Mais on peut créer les conditions pour lui faire de la place."
        },
        {
          type: "interaction",
          gameId: "sleep-ritual",
          content: "Crée ton rituel du soir avec Nox. 3 gestes ou habitudes qui disent à ton corps : c'est l'heure de se poser.",
        },
        {
          type: "action",
          content: "Essaie ce rituel ce soir. Même si tu n'arrives pas à dormir tout de suite, ton corps apprend."
        }
      ],
      magicFormula: "Je prépare mon corps à se reposer. Le sommeil viendra quand il sera prêt.",
      moral: "On ne peut pas forcer le sommeil. On peut juste lui ouvrir la porte."
    },
    {
      id: "nox_premium_5",
      title: "Quand la nuit semble interminable",
      subtitle: "Traverser les réveils nocturnes",
      promise: "Aider l'enfant qui se réveille la nuit et ne se rendort pas",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "star-count", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "nox",
          content: "Il est au milieu de la nuit et tu ne dors plus. Nox est là. Cette nuit n'est pas interminable."
        },
        {
          type: "message",
          content: "Se réveiller la nuit, c'est normal. Le corps traverse différentes phases. La nuit n'est pas cassée."
        },
        {
          type: "question",
          content: "Là, dans ce réveil, ton corps ressent :",
          options: ["De l'agitation, du mouvement", "Du calme mais la tête qui s'active", "Une peur ou une inquiétude", "Juste de la fatigue"]
        },
        {
          type: "interaction",
          gameId: "star-count",
          content: "Compte les étoiles avec Nox. Pas toutes. Juste quelques-unes. Laisse tes yeux se poser.",
        },
        {
          type: "entity-bubble",
          entity: "nox",
          content: "Nox dit : tu n'as pas besoin de dormir tout de suite. Tu as juste besoin de te reposer."
        },
        {
          type: "action",
          content: "Reste allongé. Respire lentement. Tu n'as rien à faire d'autre en ce moment."
        }
      ],
      magicFormula: "Je me repose. Le sommeil reviendra à son rythme.",
      moral: "La nuit la plus longue finit toujours par voir l'aube."
    }
  ],

  // ──────────────────────────────────────────────────────────
  // SOLI — Solitude & Rejet
  // ──────────────────────────────────────────────────────────
  soli: [
    {
      id: "soli_premium_1",
      title: "Quand je me sens invisible",
      subtitle: "Retrouver le sentiment d'exister pour les autres",
      promise: "Aider l'enfant qui se sent ignoré ou non-remarqué",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "light-beam", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "soli",
          content: "Soli brille même quand personne ne la voit. Et elle dit que toi aussi, tu brilles. Même quand ça ne se voit pas."
        },
        {
          type: "question",
          content: "Quand je me sens invisible, c'est surtout :",
          options: ["À l'école ou en groupe", "Dans ma famille", "Avec mes amis", "Partout en ce moment"]
        },
        {
          type: "message",
          content: "Se sentir invisible ne veut pas dire qu'on l'est. Parfois c'est le monde autour qui est trop bruyant pour voir ce qui est doux et discret."
        },
        {
          type: "interaction",
          gameId: "light-beam",
          content: "Soli t'envoie un rayon de lumière. Il éclaire une qualité que tu as et que tu oublies parfois.",
        },
        {
          type: "entity-bubble",
          entity: "soli",
          content: "Soli dit : les lumières douces sont souvent les plus précieuses. Même si elles ne clignottent pas fort."
        },
        {
          type: "action",
          content: "Fais un geste aujourd'hui pour te rendre visible à toi-même. Un dessin, un mot, quelque chose que tu crées."
        }
      ],
      magicFormula: "Je suis visible. Même quand le monde ne regarde pas dans ma direction.",
      moral: "Exister ne dépend pas du regard des autres."
    },
    {
      id: "soli_premium_2",
      title: "Quand j'ai été rejeté du groupe",
      subtitle: "Traverser la douleur du rejet avec dignité",
      promise: "Accompagner l'enfant après une exclusion ou un rejet social",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "connection-map", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "soli",
          content: "Soli a aussi connu des moments où on ne l'a pas laissée entrer. Elle sait que ça fait très mal. Elle est là."
        },
        {
          type: "question",
          content: "Ce rejet, il s'est passé :",
          options: ["En face de moi, devant tout le monde", "Dans mon dos, j'ai appris après", "En ligne ou sur les réseaux", "Progressivement, on s'est éloignés"]
        },
        {
          type: "message",
          content: "Le rejet fait mal parce que tu voulais appartenir. Et vouloir appartenir, c'est humain. Il n'y a rien de honteux là-dedans."
        },
        {
          type: "interaction",
          gameId: "connection-map",
          content: "Dessine avec Soli toutes les personnes qui comptent pour toi. Même une seule. Même loin. Elles sont réelles.",
        },
        {
          type: "action",
          content: "Y a-t-il une personne sur cette carte à qui tu pourrais envoyer un petit signe aujourd'hui ?"
        }
      ],
      magicFormula: "Je ne suis pas défini par ceux qui n'ont pas voulu de moi.",
      moral: "Les bons groupes se trouvent. Parfois ils mettent du temps à apparaître."
    },
    {
      id: "soli_premium_3",
      title: "Quand je préfère être seul mais que ça m'inquiète",
      subtitle: "Comprendre sa propre façon d'être en relation",
      promise: "Aider l'enfant introverti à accepter son besoin de solitude sans culpabilité",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "introvert-zone", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "soli",
          content: "Soli aime aussi être seule parfois. Ça ne veut pas dire qu'elle n'aime pas les autres. C'est juste sa façon de se recharger."
        },
        {
          type: "message",
          content: "Certaines personnes se rechargent avec les autres. D'autres se rechargent dans la solitude. Les deux sont normales."
        },
        {
          type: "question",
          content: "Quand je suis seul, je me sens :",
          options: ["Bien, reposé", "Seul mais c'est mon choix", "Seul et ça m'inquiète quand même", "Ça dépend des moments"]
        },
        {
          type: "interaction",
          gameId: "introvert-zone",
          content: "Explore avec Soli ce que ta solitude t'apporte. Elle n'est pas vide. Elle contient quelque chose.",
        },
        {
          type: "action",
          content: "La prochaine fois que tu veux être seul, fais-le sans culpabilité. C'est ton droit."
        }
      ],
      magicFormula: "Ma solitude est un choix, pas une punition. J'ai le droit de me ressourcer à ma façon.",
      moral: "S'aimer assez pour passer du temps avec soi-même, c'est une force."
    },
    {
      id: "soli_premium_4",
      title: "Trouver sa tribu",
      subtitle: "Aller vers les bonnes personnes",
      promise: "Aider l'enfant à identifier les personnes qui lui font du bien et à aller vers elles",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "tribe-finder", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "soli",
          content: "Soli dit qu'il existe quelque part des gens qui te correspondent. Peut-être pas encore trouvés. Mais ils existent."
        },
        {
          type: "question",
          content: "Les gens avec qui je me sens bien, en général ils sont :",
          options: ["Calmes et doux", "Créatifs et originaux", "Drôles et légers", "Profonds et sincères"]
        },
        {
          type: "message",
          content: "Trouver sa tribu, ça ne se commande pas. Mais on peut créer les conditions pour la rencontrer."
        },
        {
          type: "interaction",
          gameId: "tribe-finder",
          content: "Soli illumine les chemins où tu pourrais rencontrer des gens qui te ressemblent. Explore-les.",
        },
        {
          type: "entity-bubble",
          entity: "soli",
          content: "Soli dit : parfois une seule vraie connexion vaut mieux que beaucoup de relations de surface."
        },
        {
          type: "action",
          content: "Choisis un chemin ou une activité qui t'attire vraiment. Les bonnes personnes se trouvent là où on est soi-même."
        }
      ],
      magicFormula: "Ma tribu existe. Je la trouve en étant moi-même.",
      moral: "On attire les bonnes personnes en étant fidèle à qui on est vraiment."
    },
    {
      id: "soli_premium_5",
      title: "Quand un ami proche s'éloigne",
      subtitle: "Traverser la perte d'une amitié",
      promise: "Accompagner l'enfant dans la douleur d'une amitié qui se défait",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "friendship-ritual", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "soli",
          content: "Perdre une amitié, ça ressemble parfois à une rupture. Et ça fait aussi mal. Soli est là."
        },
        {
          type: "question",
          content: "Cet éloignement s'est passé :",
          options: ["Progressivement, sans qu'on s'en parle", "Après une dispute ou un malentendu", "Parce que les circonstances ont changé", "Je ne sais pas vraiment pourquoi"]
        },
        {
          type: "message",
          content: "Les amitiés changent, évoluent, parfois se terminent. Ce n'est pas toujours la faute de quelqu'un."
        },
        {
          type: "interaction",
          gameId: "friendship-ritual",
          content: "Crée un petit rituel pour honorer cette amitié avec Soli. Pour reconnaître ce qu'elle t'a donné.",
        },
        {
          type: "action",
          content: "Y a-t-il quelque chose que tu voudrais dire à cet ami, même s'il ne peut pas l'entendre ? Écris-le. Pour toi."
        }
      ],
      magicFormula: "Ce que cette amitié m'a donné reste en moi. Même si elle a changé.",
      moral: "Toutes les amitiés ne durent pas toujours. Mais elles laissent toutes quelque chose."
    }
  ],

  // ──────────────────────────────────────────────────────────
  // LUNA — NOUVELLE ENTITÉ PREMIUM
  // Émotion : Confiance en soi / Estime de soi
  // ──────────────────────────────────────────────────────────
  luna: [
    {
      id: "luna_premium_1",
      title: "Quand je ne me sens pas assez bien",
      subtitle: "Retrouver sa valeur quand on se déprécie",
      promise: "Aider l'enfant à combattre la petite voix qui dit qu'il n'est pas assez bien",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "inner-voice", "mirror-moment", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "luna",
          content: "Je suis Luna. Je suis là pour tous les moments où tu doutes de toi. On va chercher ta lumière ensemble."
        },
        {
          type: "question",
          content: "Cette voix qui dit que tu n'es pas assez bien, elle dit plutôt :",
          options: ["Tu n'es pas aussi bon que les autres", "Tu n'es pas assez courageux", "Tu n'es pas assez intéressant", "Tu fais tout de travers"]
        },
        {
          type: "message",
          content: "Cette petite voix, elle n'est pas toi. Elle s'est installée là un jour, à cause de quelque chose. Mais elle n'est pas la vérité."
        },
        {
          type: "interaction",
          gameId: "inner-voice",
          content: "Luna t'aide à répondre à cette voix. Pas pour la faire taire. Pour lui montrer qu'elle se trompe.",
        },
        {
          type: "entity-bubble",
          entity: "luna",
          content: "Luna dit : tu n'as pas besoin d'être parfait pour mériter d'être là."
        },
        {
          type: "interaction",
          gameId: "mirror-moment",
          content: "Regarde dans le miroir de Luna. Dis-lui une chose vraie et douce sur toi. Juste une.",
        },
        {
          type: "action",
          content: "Écris cette chose douce sur un bout de papier. Mets-la là où tu la verras demain matin."
        }
      ],
      magicFormula: "Je suis assez. Exactement comme je suis, maintenant.",
      moral: "La valeur d'une personne ne se mesure pas à ce qu'elle réussit ou rate."
    },
    {
      id: "luna_premium_2",
      title: "Quand j'ai honte de quelque chose",
      subtitle: "Transformer la honte en apprentissage",
      promise: "Aider l'enfant à traverser la honte sans s'y noyer",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "shame-transformer", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "luna",
          content: "Luna a connu la honte elle aussi. C'est une émotion très difficile à porter. On va la regarder ensemble, sans se juger."
        },
        {
          type: "question",
          content: "Cette honte, elle vient de :",
          options: ["Quelque chose que j'ai fait", "Quelque chose qu'on a dit de moi", "Quelque chose dans ma famille ou ma vie", "Une partie de moi que je n'aime pas"]
        },
        {
          type: "message",
          content: "La honte dit 'je suis mauvais'. La culpabilité dit 'j'ai fait quelque chose de mauvais'. Ce n'est pas la même chose."
        },
        {
          type: "interaction",
          gameId: "shame-transformer",
          content: "Luna t'aide à transformer cette honte. Elle prend ce que tu lui donnes et en fait quelque chose de plus léger.",
        },
        {
          type: "entity-bubble",
          entity: "luna",
          content: "Tu n'es pas ta honte. Tu es beaucoup plus que ça."
        },
        {
          type: "action",
          content: "Ce que tu as vécu t'a peut-être appris quelque chose. Si oui, garde juste ça. Laisse le reste partir."
        }
      ],
      magicFormula: "Je ne suis pas ma honte. Je peux apprendre d'elle et la laisser partir.",
      moral: "La honte qu'on peut regarder en face perd beaucoup de son pouvoir."
    },
    {
      id: "luna_premium_3",
      title: "Quand je compare sans arrêt",
      subtitle: "Sortir du piège de la comparaison",
      promise: "Aider l'enfant à retrouver son propre chemin plutôt que de se mesurer aux autres",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "my-path", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "luna",
          content: "Luna brille d'une lumière qui n'appartient qu'à elle. Pas plus grande, pas plus petite. Juste la sienne."
        },
        {
          type: "question",
          content: "Quand je me compare aux autres, c'est surtout sur :",
          options: ["Les résultats scolaires", "L'apparence physique", "La popularité ou les amis", "Les talents et les compétences"]
        },
        {
          type: "message",
          content: "Comparer deux parcours différents, c'est comme comparer un oiseau qui vole et un poisson qui nage. Ils ont chacun leur génie."
        },
        {
          type: "interaction",
          gameId: "my-path",
          content: "Dessine avec Luna ton propre chemin. Avec tes propres couleurs. Il n'a pas besoin de ressembler à celui des autres.",
        },
        {
          type: "action",
          content: "Identifie une chose dans laquelle tu es unique. Pas forcément meilleur. Juste unique à toi."
        }
      ],
      magicFormula: "Mon chemin est le mien. Je n'ai pas à le comparer à celui des autres.",
      moral: "Le seul vrai rival est la version d'hier de soi-même."
    },
    {
      id: "luna_premium_4",
      title: "Quand j'ai peur d'essayer",
      subtitle: "Prendre le risque de tenter quelque chose",
      promise: "Aider l'enfant à surmonter la peur de l'échec pour oser essayer",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: true,
        ending: true,
        visualMoments: ["header", "first-step", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "luna",
          content: "Luna essaie des choses même quand elle n'est pas sûre du résultat. Parce qu'elle sait que ne pas essayer, c'est déjà une réponse."
        },
        {
          type: "question",
          content: "Ce qui me retient d'essayer, c'est surtout :",
          options: ["La peur de mal faire devant les autres", "La peur de décevoir", "La peur de confirmer que je ne suis pas bon", "La peur de souffrir si ça ne marche pas"]
        },
        {
          type: "message",
          content: "Rater quelque chose qu'on a essayé, c'est infiniment plus riche que de ne jamais avoir tenté."
        },
        {
          type: "interaction",
          gameId: "first-step",
          content: "Luna t'aide à trouver ton premier pas. Pas le grand saut. Juste le premier tout petit pas.",
        },
        {
          type: "entity-bubble",
          entity: "luna",
          content: "Luna dit : tu peux essayer juste pour voir. Sans promettre que ça marchera."
        },
        {
          type: "action",
          content: "Fais ce premier pas dans les 24 heures. Il n'a pas besoin d'être parfait."
        }
      ],
      magicFormula: "J'essaie. Pas parce que je suis sûr de réussir. Parce que j'ai le droit d'essayer.",
      moral: "Le regret de ne pas avoir essayé dure beaucoup plus longtemps que le regret d'avoir raté."
    },
    {
      id: "luna_premium_5",
      title: "Apprendre à se féliciter",
      subtitle: "Célébrer ses propres réussites sans les minimiser",
      promise: "Aider l'enfant à reconnaître et célébrer ses propres victoires, petites ou grandes",
      isPremium: true,
      entityPresence: {
        intro: true,
        midpoint: false,
        ending: true,
        visualMoments: ["header", "victory-jar", "end-card"]
      },
      steps: [
        {
          type: "entity-intro",
          entity: "luna",
          content: "Luna célèbre chaque petite victoire. Parce qu'elle sait que les grandes réussites sont faites de mille petits succès."
        },
        {
          type: "message",
          content: "Beaucoup d'enfants savent voir ce qui ne va pas mais ont du mal à reconnaître ce qui va bien. On peut s'entraîner."
        },
        {
          type: "question",
          content: "Récemment, tu as réussi quelque chose. Même petit. C'était :",
          options: ["Quelque chose de difficile à l'école", "Un comportement courageux", "Quelque chose que tu as appris ou créé", "Un moment difficile que tu as traversé"]
        },
        {
          type: "interaction",
          gameId: "victory-jar",
          content: "Mets cette victoire dans le bocal de Luna. Elle va briller là dedans. Tu peux la regarder quand tu en as besoin.",
        },
        {
          type: "action",
          content: "Félicite-toi à voix haute. Dis : 'J'ai fait ça. C'était difficile. Je l'ai fait quand même.'"
        }
      ],
      magicFormula: "Je mérite de me féliciter. Mes petites victoires comptent autant que les grandes.",
      moral: "Ceux qui savent se célébrer eux-mêmes avancent plus loin et plus longtemps."
    }
  ]
};

// ──────────────────────────────────────────────────────────
// NOVA — Nouvelle entité premium complète
// ──────────────────────────────────────────────────────────
export const lunaEntity = {
  id: "luna",
  name: "Luna",
  isPremium: true,
  emotion: "confiance",
  emotion_label: "La Confiance en soi",
  subtitle: "Quand on doute de sa valeur",
  style: "Petite étoile-miroir lumineuse et douce",
  description: "Luna est une petite créature faite de lumière dorée et argentée, comme une étoile qui aurait pris forme. Elle est ronde, douce, et porte un petit miroir sur sa poitrine — non pas pour montrer les défauts, mais pour refléter la lumière intérieure de chacun.",
  colors: {
    primary: "#f0c060",
    secondary: "#fff0a0",
    background: "#fffae8",
    text: "#5a3a00",
    accent: "#e8a820"
  },
  personality: "douce, encourageante, sans jamais être naïve ou mielleuse",
  tone: "aide à retrouver la confiance en soi et l'estime de soi sans minimiser les difficultés",
  power: "Refléter la lumière intérieure de l'enfant quand il ne la voit plus",
  intro: "Je suis Luna. Je suis là pour tous les moments où tu oublies ta valeur. Tu en as une. On va la retrouver ensemble.",
  phrases: {
    welcome: "Luna est là. Et elle voit quelque chose en toi que tu ne vois peut-être pas encore.",
    midpoint: "Tu avances. Même quand ça ne se voit pas de l'extérieur.",
    ending: "Luna a vu ta lumière aujourd'hui. Elle espère que toi aussi tu l'as vue un peu.",
    formula_intro: "Voici la formule que Luna te confie."
  },
  miniGames: [
    {
      id: "inner-voice",
      name: "La voix intérieure",
      description: "Identifier et répondre à la petite voix critique intérieure"
    },
    {
      id: "mirror-moment",
      name: "Le miroir de Luna",
      description: "Voir une qualité réelle dans son propre reflet"
    },
    {
      id: "my-path",
      name: "Mon chemin unique",
      description: "Dessiner son propre parcours sans le comparer"
    },
    {
      id: "victory-jar",
      name: "Le bocal des victoires",
      description: "Collecter ses petites réussites"
    },
    {
      id: "first-step",
      name: "Mon premier pas",
      description: "Identifier et faire un premier pas concret"
    }
  ]
};
