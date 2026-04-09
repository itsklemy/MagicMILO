// premiumRoutes.js — 40 parcours premium
// 5 entités gratuites × 5 parcours + Luna + Amora + Philo × 5 parcours
// Règle : 1 phrase max par étape, pas d'emojis, univers magique

export const premiumRoutes = {

  // ═══════════════════════════════════════════════════════════
  // BRUMO — La Peur
  // ═══════════════════════════════════════════════════════════
  brumo: [
    {
      id: "brumo_p1",
      title: "Quand mon cœur bat trop vite",
      subtitle: "Calmer son corps de l'intérieur",
      magicFormula: "Mon corps m'écoute. Je peux lui parler.",
      moral: "Ton corps n'est pas ton ennemi — il essaie de t'aider.",
      steps: [
        { type: "entity-intro", content: "Je sens que quelque chose fait battre ton cœur très fort." },
        { type: "question", content: "Là, dans ton corps, qu'est-ce que tu sens ?", options: ["Mon cœur bat fort", "Mon ventre est serré", "Mes jambes bougent", "Tout à la fois"] },
        { type: "entity-bubble", content: "Ton corps envoie un signal. Il n'est pas en danger — il se prépare." },
        { type: "interaction", gameId: "HeartBeat", content: "Tapote l'écran au rythme de ta respiration. Ensemble on ralentit." },
        { type: "entity-bubble", content: "Tu viens de ralentir ton propre cœur. Tu as vu ?" },
        { type: "formula", content: "Mon corps m'écoute. Je peux lui parler." },
        { type: "action", content: "Ce soir, pose une main sur ta poitrine et dis tout bas : on ralentit ensemble." }
      ]
    },
    {
      id: "brumo_p2",
      title: "La peur du noir",
      subtitle: "Transformer l'obscurité en douceur",
      magicFormula: "Dans le noir, je suis toujours moi. Et je suis en sécurité.",
      moral: "Le noir ne change rien à ce qui est là.",
      steps: [
        { type: "entity-intro", content: "Le noir peut faire peur. Tu n'es pas le seul, tu sais." },
        { type: "question", content: "Quand la lumière s'éteint, qu'est-ce qui se passe ?", options: ["Des pensées arrivent", "Je reste immobile", "J'appelle quelqu'un", "Je me cache"] },
        { type: "entity-bubble", content: "Les peurs du noir grandissent dans le silence. On va les rétrécir." },
        { type: "interaction", gameId: "StarCatcher", content: "Attrape les étoiles douces. Laisse filer les pensées lourdes." },
        { type: "entity-bubble", content: "Regarde — tu choisis ce que tu gardes dans ta tête." },
        { type: "formula", content: "Dans le noir, je suis toujours moi. Et je suis en sécurité." },
        { type: "action", content: "Ce soir, cherche une étoile dans le ciel. Elle veille sur toi." }
      ]
    },
    {
      id: "brumo_p3",
      title: "Quand je me fais trop de souci",
      subtitle: "Mettre ses inquiétudes quelque part",
      magicFormula: "Mes soucis ne sont pas plus grands que moi.",
      moral: "Un souci posé quelque part prend moins de place dans la tête.",
      steps: [
        { type: "entity-intro", content: "Tes pensées tournent en rond et ne s'arrêtent pas ?" },
        { type: "question", content: "Ton souci du moment, il ressemble à quoi ?", options: ["Quelque chose qui va arriver", "Quelque chose que j'ai fait", "Quelqu'un qui me manque", "Je ne sais pas trop"] },
        { type: "entity-bubble", content: "Un souci dans la tête prend toute la place. Mettons-le ailleurs." },
        { type: "interaction", gameId: "WorryJar", content: "Glisse tes soucis dans le bocal. Ferme le couvercle." },
        { type: "entity-bubble", content: "Il est là, dans le bocal. Mais il n'est plus dans ta tête." },
        { type: "formula", content: "Mes soucis ne sont pas plus grands que moi." },
        { type: "action", content: "Trouve une boîte à la maison. C'est ton bocal à soucis réel." }
      ]
    },
    {
      id: "brumo_p4",
      title: "Préparer son courage",
      subtitle: "Construire un bouclier intérieur",
      magicFormula: "J'ai déjà été courageux. Je peux l'être encore.",
      moral: "Le courage ne veut pas dire ne pas avoir peur.",
      steps: [
        { type: "entity-intro", content: "Quelque chose de difficile arrive bientôt ?" },
        { type: "question", content: "Qu'est-ce qui t'aide à te sentir plus fort ?", options: ["Penser à quelqu'un que j'aime", "Me rappeler que j'y ai survécu", "Respirer très fort", "Rien pour l'instant"] },
        { type: "entity-bubble", content: "Tu as déjà traversé des choses difficiles. Rappelons-toi ça." },
        { type: "interaction", gameId: "CourageShield", content: "Choisis 3 mots pour ton bouclier. Ils restent avec toi." },
        { type: "entity-bubble", content: "Ton bouclier est prêt. Il est invisible mais il est là." },
        { type: "formula", content: "J'ai déjà été courageux. Je peux l'être encore." },
        { type: "action", content: "Avant l'événement difficile, dis tes 3 mots tout bas." }
      ]
    },
    {
      id: "brumo_p5",
      title: "Quand mon corps se bloque",
      subtitle: "Débloquer son corps avec le souffle",
      magicFormula: "Je souffle et je laisse partir ce qui m'alourdit.",
      moral: "Le souffle est toujours là, même quand tout le reste se fige.",
      steps: [
        { type: "entity-intro", content: "Parfois la peur fige tout — les jambes, la voix, les mains." },
        { type: "question", content: "Quand tu as peur, qu'est-ce qui se bloque en premier ?", options: ["Ma voix disparaît", "Mes jambes ne bougent plus", "Ma tête se vide", "Mon ventre se noue"] },
        { type: "entity-bubble", content: "Le souffle peut tout débloquer. Essaie avec moi." },
        { type: "interaction", gameId: "ColorBreath", content: "Respire et colorie le ciel. Chaque souffle apporte une couleur." },
        { type: "entity-bubble", content: "Regarde ce que ton souffle peut créer." },
        { type: "formula", content: "Je souffle et je laisse partir ce qui m'alourdit." },
        { type: "action", content: "La prochaine fois que tu te bloques, commence juste par un souffle." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // IGNIS — La Colère
  // ═══════════════════════════════════════════════════════════
  ignis: [
    {
      id: "ignis_p1",
      title: "Quand j'explose sans l'avoir voulu",
      subtitle: "Comprendre l'étincelle avant le feu",
      magicFormula: "Ma colère me parle. Je l'écoute avant qu'elle crie.",
      moral: "Une explosion vient toujours d'une étincelle qu'on n'a pas vue.",
      steps: [
        { type: "entity-intro", content: "Je connais ça — le feu qui part avant qu'on l'ait décidé." },
        { type: "question", content: "Juste avant d'exploser, tu ressens quoi ?", options: ["Une chaleur dans la poitrine", "Les mâchoires serrées", "Une envie de crier", "Rien — ça part d'un coup"] },
        { type: "entity-bubble", content: "Ce signe, c'est ton signal d'alarme. On va apprendre à le voir." },
        { type: "interaction", gameId: "FireBreath", content: "Souffle sur les flammes. Chaque souffle en éteint une." },
        { type: "entity-bubble", content: "Tu peux éteindre le feu — toi-même." },
        { type: "formula", content: "Ma colère me parle. Je l'écoute avant qu'elle crie." },
        { type: "action", content: "Demain, guette ton signal d'alarme. Juste le voir, c'est déjà beaucoup." }
      ]
    },
    {
      id: "ignis_p2",
      title: "Quand on m'a dit quelque chose de blessant",
      subtitle: "Les mots font des traces, on peut les effacer",
      magicFormula: "Les mots des autres ne définissent pas qui je suis.",
      moral: "Un mot blessant dit quelque chose sur celui qui le dit, pas sur toi.",
      steps: [
        { type: "entity-intro", content: "Quelqu'un t'a dit quelque chose qui brûle encore ?" },
        { type: "question", content: "Ce mot ou cette phrase, où est-ce qu'il reste ?", options: ["Dans ma tête, il tourne", "Dans mon ventre, il pèse", "Dans mes yeux, il brûle", "Partout à la fois"] },
        { type: "entity-bubble", content: "Ce mot ne te définit pas. On va le mettre à sa vraie place." },
        { type: "interaction", gameId: "FireBreath", content: "Souffle sur ce mot. Regarde-le rétrécir." },
        { type: "entity-bubble", content: "Tu es bien plus grand que ce mot." },
        { type: "formula", content: "Les mots des autres ne définissent pas qui je suis." },
        { type: "action", content: "Écris une chose vraie et belle sur toi. Une seule suffit." }
      ]
    },
    {
      id: "ignis_p3",
      title: "Quand tout semble injuste",
      subtitle: "Trouver quoi faire avec l'injustice",
      magicFormula: "Je peux ressentir l'injustice et garder ma dignité.",
      moral: "Ressentir l'injustice, c'est avoir un sens moral. C'est précieux.",
      steps: [
        { type: "entity-intro", content: "La colère face à l'injustice, c'est du courage déguisé." },
        { type: "question", content: "Cette injustice, elle te touche comment ?", options: ["J'ai envie de me battre", "Je me sens impuissant", "Je pleure de rage", "Je veux que ça change"] },
        { type: "entity-bubble", content: "Ta colère dit que tu sais ce qui est juste. C'est une force." },
        { type: "interaction", gameId: "CourageShield", content: "Mets tes valeurs dans ton bouclier. Ce en quoi tu crois." },
        { type: "entity-bubble", content: "Tu portes quelque chose d'important en toi." },
        { type: "formula", content: "Je peux ressentir l'injustice et garder ma dignité." },
        { type: "action", content: "Une petite action juste aujourd'hui. Même minuscule." }
      ]
    },
    {
      id: "ignis_p4",
      title: "Quand j'ai envie de tout casser",
      subtitle: "Trouver où mettre cette énergie énorme",
      magicFormula: "Mon énergie est grande. Je choisis où elle va.",
      moral: "L'énergie de la colère peut construire autant qu'elle peut détruire.",
      steps: [
        { type: "entity-intro", content: "Parfois la colère est si grande qu'elle cherche une sortie." },
        { type: "question", content: "Quand tu as envie de tout casser, qu'est-ce que tu fais ?", options: ["Je crie dans un coussin", "Je cours ou je saute", "Je reste immobile à bouillir", "Je ne sais pas quoi faire"] },
        { type: "entity-bubble", content: "Cette énergie a besoin de sortir — mais en choisissant comment." },
        { type: "interaction", gameId: "FireBreath", content: "Souffle fort. Encore. Laisse sortir tout ce feu." },
        { type: "entity-bubble", content: "Voilà. Elle est sortie. Et tu n'as rien cassé." },
        { type: "formula", content: "Mon énergie est grande. Je choisis où elle va." },
        { type: "action", content: "Trouve ton geste à toi — courir, dessiner, frapper un coussin." }
      ]
    },
    {
      id: "ignis_p5",
      title: "Après la colère, la réconciliation",
      subtitle: "Revenir vers l'autre après la tempête",
      magicFormula: "Je peux me tromper et rester quelqu'un de bien.",
      moral: "Réparer après une colère demande plus de courage qu'exploser.",
      steps: [
        { type: "entity-intro", content: "La tempête est passée. Maintenant, qu'est-ce qu'on fait ?" },
        { type: "question", content: "Après une grosse colère, tu te sens comment ?", options: ["Honteux de ce que j'ai dit", "Soulagé mais fatigué", "Perdu, je ne sais plus", "Du mal à revenir vers l'autre"] },
        { type: "entity-bubble", content: "La honte veut dire que tu tiens à bien faire. C'est bon signe." },
        { type: "interaction", gameId: "HeartWarm", content: "Réchauffe ce cœur qui s'est refroidi pendant la dispute." },
        { type: "entity-bubble", content: "On peut réparer. Presque toujours." },
        { type: "formula", content: "Je peux me tromper et rester quelqu'un de bien." },
        { type: "action", content: "Un mot, un geste, un dessin. Pour revenir vers l'autre." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // PLUMA — La Tristesse
  // ═══════════════════════════════════════════════════════════
  pluma: [
    {
      id: "pluma_p1",
      title: "Quand quelqu'un me manque",
      subtitle: "Garder quelqu'un dans son cœur",
      magicFormula: "Ceux qui me manquent vivent dans ce que j'ai reçu d'eux.",
      moral: "Le manque est une preuve d'amour.",
      steps: [
        { type: "entity-intro", content: "Tu penses à quelqu'un qui n'est plus là, ou qui est loin ?" },
        { type: "question", content: "Ce manque, tu le ressens où ?", options: ["Dans ma poitrine", "Quand je vois ses affaires", "Le soir surtout", "Tout le temps, partout"] },
        { type: "entity-bubble", content: "Manquer de quelqu'un, c'est l'aimer. Tu portes quelque chose de beau." },
        { type: "interaction", gameId: "TearJar", content: "Laisse les larmes tomber. Chacune est une pensée pour lui." },
        { type: "entity-bubble", content: "Ces larmes te connectent encore à lui." },
        { type: "formula", content: "Ceux qui me manquent vivent dans ce que j'ai reçu d'eux." },
        { type: "action", content: "Fais quelque chose que vous aimiez faire ensemble. Pour lui, pour toi." }
      ]
    },
    {
      id: "pluma_p2",
      title: "Quand je pleure sans savoir pourquoi",
      subtitle: "Accueillir les larmes sans explication",
      magicFormula: "Mes larmes savent quelque chose que ma tête ne sait pas encore.",
      moral: "Pleurer sans raison, c'est parfois le corps qui fait le ménage.",
      steps: [
        { type: "entity-intro", content: "Parfois les larmes arrivent sans prévenir. C'est normal." },
        { type: "question", content: "Ces larmes sans raison, tu les accueilles comment ?", options: ["Je les retiens fort", "Je me cache pour pleurer", "Je me demande ce qui ne va pas", "Je les laisse venir"] },
        { type: "entity-bubble", content: "Ton corps sait des choses. Il nettoie, il libère. Laisse-le faire." },
        { type: "interaction", gameId: "TearJar", content: "Accueille chaque larme. Tu n'as pas à les expliquer." },
        { type: "entity-bubble", content: "Après les larmes, il y a souvent un peu plus de légèreté." },
        { type: "formula", content: "Mes larmes savent quelque chose que ma tête ne sait pas encore." },
        { type: "action", content: "La prochaine fois, laisse-toi pleurer. Juste ça." }
      ]
    },
    {
      id: "pluma_p3",
      title: "Quand la tristesse reste longtemps",
      subtitle: "Vivre avec une tristesse qui s'installe",
      magicFormula: "La tristesse est une saison. Elle ne dure pas toujours.",
      moral: "Une tristesse longue mérite une attention douce, pas de la résistance.",
      steps: [
        { type: "entity-intro", content: "Parfois la tristesse s'installe et ne repart pas vite." },
        { type: "question", content: "Cette tristesse longue, elle ressemble à quoi ?", options: ["Un ciel gris qui ne change pas", "Une fatigue profonde", "L'envie d'être seul", "Une couleur terne sur tout"] },
        { type: "entity-bubble", content: "Une tristesse longue a quelque chose à dire. On va l'écouter." },
        { type: "interaction", gameId: "ColorBreath", content: "Respire de la couleur dans ton ciel gris. Doucement." },
        { type: "entity-bubble", content: "Il y a encore de la couleur en toi. Elle attend." },
        { type: "formula", content: "La tristesse est une saison. Elle ne dure pas toujours." },
        { type: "action", content: "Une chose petite et douce pour toi aujourd'hui. Juste une." }
      ]
    },
    {
      id: "pluma_p4",
      title: "Quand quelque chose de beau est fini",
      subtitle: "Dire au revoir sans effacer",
      magicFormula: "Ce qui est fini n'est pas perdu. Il reste dans moi.",
      moral: "Les fins font de la place à ce qui vient.",
      steps: [
        { type: "entity-intro", content: "Quelque chose de beau s'est terminé. Ça laisse un vide." },
        { type: "question", content: "Cette fin, comment tu la portes ?", options: ["Je voudrais revenir en arrière", "Je garde tout pour ne pas oublier", "J'ai du mal à m'en aller", "Je suis triste mais j'avance"] },
        { type: "entity-bubble", content: "Garder le souvenir et avancer, c'est possible en même temps." },
        { type: "interaction", gameId: "VictoryJar", content: "Mets les beaux moments dans le bocal. Ils sont à toi pour toujours." },
        { type: "entity-bubble", content: "Ce bocal, personne ne peut te le prendre." },
        { type: "formula", content: "Ce qui est fini n'est pas perdu. Il reste dans moi." },
        { type: "action", content: "Dessine ou note un souvenir de ce moment beau. Garde-le." }
      ]
    },
    {
      id: "pluma_p5",
      title: "Quand je me sens gris de l'intérieur",
      subtitle: "Retrouver une étincelle",
      magicFormula: "Même les jours gris ont une lumière quelque part.",
      moral: "Le gris n'est pas l'absence de lumière. C'est la lumière qui se repose.",
      steps: [
        { type: "entity-intro", content: "Tu n'es ni triste ni heureux. Tu es juste gris." },
        { type: "question", content: "Qu'est-ce qui t'a donné un tout petit peu de joie récemment ?", options: ["Un repas que j'aime", "Une musique", "Un moment avec quelqu'un", "Je ne sais pas... rien"] },
        { type: "entity-bubble", content: "Même tout petit, ce moment existe. Accrochons-nous à lui." },
        { type: "interaction", gameId: "ColorBreath", content: "Souffle une couleur dans le gris. Même une toute petite." },
        { type: "entity-bubble", content: "Tu vois ? Il y avait encore de la couleur en toi." },
        { type: "formula", content: "Même les jours gris ont une lumière quelque part." },
        { type: "action", content: "Cherche ta toute petite lumière aujourd'hui. Elle est là." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // NOX — Les Cauchemars
  // ═══════════════════════════════════════════════════════════
  nox: [
    {
      id: "nox_p1",
      title: "Quand les pensées tournent avant de dormir",
      subtitle: "Calmer le manège du soir",
      magicFormula: "La nuit, je pose mes pensées. Elles peuvent attendre demain.",
      moral: "Une pensée du soir n'a pas besoin d'une réponse cette nuit.",
      steps: [
        { type: "entity-intro", content: "Le soir les pensées tournent. On va les ralentir ensemble." },
        { type: "question", content: "Ce soir, qu'est-ce qui tourne dans ta tête ?", options: ["Ce qui s'est passé aujourd'hui", "Ce qui va se passer demain", "Quelqu'un à qui je pense", "Des images qui reviennent"] },
        { type: "entity-bubble", content: "Ces pensées méritent d'être posées quelque part pour la nuit." },
        { type: "interaction", gameId: "WorryJar", content: "Mets tes pensées du soir dans le bocal. Elles t'attendent demain." },
        { type: "entity-bubble", content: "Le bocal est fermé. Ta tête peut se reposer." },
        { type: "formula", content: "La nuit, je pose mes pensées. Elles peuvent attendre demain." },
        { type: "action", content: "Un carnet près du lit pour écrire les pensées du soir." }
      ]
    },
    {
      id: "nox_p2",
      title: "Rejouer la fin d'un mauvais rêve",
      subtitle: "Réécrire le cauchemar à sa façon",
      magicFormula: "Je suis l'auteur de mes rêves. Je peux les changer.",
      moral: "Un cauchemar rejoué différemment perd son pouvoir.",
      steps: [
        { type: "entity-intro", content: "Un mauvais rêve peut se rejouer autrement. Essaie avec moi." },
        { type: "question", content: "Dans ton cauchemar, qu'est-ce qui fait le plus peur ?", options: ["Quelque chose qui me poursuit", "Je suis perdu tout seul", "Quelqu'un que j'aime est en danger", "Des images très sombres"] },
        { type: "entity-bubble", content: "Et si ce cauchemar avait une fin différente ? Tu choisis." },
        { type: "interaction", gameId: "StarCatcher", content: "Attrape les étoiles pour la nouvelle fin de ton rêve." },
        { type: "entity-bubble", content: "Tu viens d'écrire une nouvelle fin. Elle est à toi." },
        { type: "formula", content: "Je suis l'auteur de mes rêves. Je peux les changer." },
        { type: "action", content: "Ce soir avant de dormir, imagine la nouvelle fin de ton rêve." }
      ]
    },
    {
      id: "nox_p3",
      title: "Créer son espace de sécurité",
      subtitle: "Un endroit imaginaire pour se réfugier",
      magicFormula: "J'ai un endroit à moi où je suis toujours en sécurité.",
      moral: "Un refuge imaginaire est aussi réel que les émotions qu'il apaise.",
      steps: [
        { type: "entity-intro", content: "On va construire ton endroit secret. Personne d'autre n'y entre." },
        { type: "question", content: "Ton endroit sûr, il ressemblerait à quoi ?", options: ["Une cabane dans les arbres", "Une grotte avec des cristaux", "Un nuage dans le ciel", "Une maison au bord de la mer"] },
        { type: "entity-bubble", content: "Ferme les yeux. Cet endroit existe maintenant." },
        { type: "interaction", gameId: "StarCatcher", content: "Attrape les étoiles pour décorer ton espace secret." },
        { type: "entity-bubble", content: "Tu peux y aller n'importe quand. La nuit surtout." },
        { type: "formula", content: "J'ai un endroit à moi où je suis toujours en sécurité." },
        { type: "action", content: "Dessine ton espace secret. Garde-le sous ton oreiller." }
      ]
    },
    {
      id: "nox_p4",
      title: "Quand je ne veux pas aller dormir",
      subtitle: "Comprendre ce que cache ce refus",
      magicFormula: "Le sommeil est un ami, pas un ennemi.",
      moral: "Refuser le sommeil, c'est souvent avoir peur de ce qu'il amène.",
      steps: [
        { type: "entity-intro", content: "Ne pas vouloir dormir, c'est souvent protéger quelque chose." },
        { type: "question", content: "Pourquoi tu repousses le moment de dormir ?", options: ["J'ai peur de faire des cauchemars", "J'aime pas être seul dans le noir", "Je veux pas rater quelque chose", "Je ne sais pas"] },
        { type: "entity-bubble", content: "Le sommeil n'est pas là pour te prendre. Il est là pour te redonner." },
        { type: "interaction", gameId: "StarCatcher", content: "Attrape les étoiles du soir. Elles gardent la nuit douce." },
        { type: "entity-bubble", content: "La nuit est de ton côté. Elle prépare un meilleur demain." },
        { type: "formula", content: "Le sommeil est un ami, pas un ennemi." },
        { type: "action", content: "Un rituel du soir — 3 choses douces avant d'éteindre." }
      ]
    },
    {
      id: "nox_p5",
      title: "Quand la nuit semble interminable",
      subtitle: "Traverser les heures difficiles",
      magicFormula: "Cette nuit se terminera. Le matin arrive toujours.",
      moral: "Dans les nuits longues, chaque heure passée est une victoire.",
      steps: [
        { type: "entity-intro", content: "Les nuits longues sont épuisantes. Je reste avec toi." },
        { type: "question", content: "Quand tu n'arrives pas à dormir, tu fais quoi ?", options: ["Je regarde le plafond", "Je pense à des choses qui m'inquiètent", "Je me lève", "Je reste immobile en espérant"] },
        { type: "entity-bubble", content: "Ton corps est allongé. C'est déjà du repos. Même sans dormir." },
        { type: "interaction", gameId: "HeartBeat", content: "Tapote doucement le rythme de ta respiration. Lent, lent, lent." },
        { type: "entity-bubble", content: "Le matin arrive toujours. Cette nuit aussi elle se terminera." },
        { type: "formula", content: "Cette nuit se terminera. Le matin arrive toujours." },
        { type: "action", content: "Garde quelque chose de doux près de toi pour les nuits difficiles." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // SOLI — La Solitude
  // ═══════════════════════════════════════════════════════════
  soli: [
    {
      id: "soli_p1",
      title: "Quand je me sens invisible",
      subtitle: "Retrouver sa présence dans le monde",
      magicFormula: "Je suis là. Et ma présence a de la valeur.",
      moral: "Se sentir invisible ne veut pas dire qu'on ne compte pas.",
      steps: [
        { type: "entity-intro", content: "Tu es là mais personne ne te voit vraiment ?" },
        { type: "question", content: "Être invisible, ça te fait ressentir quoi ?", options: ["De la tristesse profonde", "De la colère", "Une envie de disparaître", "Un sentiment d'être différent"] },
        { type: "entity-bubble", content: "Je te vois, moi. Et ce que tu ressens est important." },
        { type: "interaction", gameId: "CourageShield", content: "Mets dans ton bouclier ce qui fait ta valeur." },
        { type: "entity-bubble", content: "Tu es un fil dans la toile. La toile a besoin de toi." },
        { type: "formula", content: "Je suis là. Et ma présence a de la valeur." },
        { type: "action", content: "Dis une chose à voix haute aujourd'hui. N'importe laquelle." }
      ]
    },
    {
      id: "soli_p2",
      title: "Quand j'ai été rejeté du groupe",
      subtitle: "Traverser la blessure du rejet",
      magicFormula: "Le rejet me blesse mais ne me définit pas.",
      moral: "Être rejeté d'un groupe ne veut pas dire qu'on n'est pas à sa place partout.",
      steps: [
        { type: "entity-intro", content: "Être mis de côté, ça fait très mal. Vraiment." },
        { type: "question", content: "Ce rejet, il t'a touché comment ?", options: ["Je me demande ce que j'ai fait de mal", "J'ai honte", "J'ai envie de me venger", "Je veux plus jamais essayer"] },
        { type: "entity-bubble", content: "Ce n'est pas toi le problème. Parfois les groupes font mal." },
        { type: "interaction", gameId: "CourageShield", content: "Mets dans ton bouclier ce qui fait ta vraie valeur." },
        { type: "entity-bubble", content: "Ce bouclier, personne ne peut te l'enlever." },
        { type: "formula", content: "Le rejet me blesse mais ne me définit pas." },
        { type: "action", content: "Cherche une personne — une seule — qui te voit vraiment." }
      ]
    },
    {
      id: "soli_p3",
      title: "Quand je préfère être seul",
      subtitle: "La solitude choisie, c'est différent",
      magicFormula: "Être seul par choix est une façon de prendre soin de moi.",
      moral: "Avoir besoin de solitude n'est pas une faiblesse.",
      steps: [
        { type: "entity-intro", content: "Parfois on a besoin d'être seul. Et c'est tout à fait bien." },
        { type: "question", content: "Ta solitude à toi, elle ressemble à quoi ?", options: ["Un moment pour me recharger", "Un refuge quand c'est trop", "Une façon d'être avec moi-même", "Je ne sais pas trop"] },
        { type: "entity-bubble", content: "La solitude choisie est un cadeau qu'on se fait." },
        { type: "interaction", gameId: "VictoryJar", content: "Mets dans le bocal ce que tu aimes faire seul." },
        { type: "entity-bubble", content: "Tu es une bonne compagnie pour toi-même." },
        { type: "formula", content: "Être seul par choix est une façon de prendre soin de moi." },
        { type: "action", content: "Offre-toi un moment seul cette semaine. Intentionnellement." }
      ]
    },
    {
      id: "soli_p4",
      title: "Trouver sa tribu",
      subtitle: "Chercher ceux qui nous ressemblent",
      magicFormula: "Il y a quelqu'un, quelque part, qui me comprendra.",
      moral: "Ne pas avoir trouvé sa tribu encore ne veut pas dire qu'elle n'existe pas.",
      steps: [
        { type: "entity-intro", content: "Ta tribu existe. Elle n'est peut-être pas encore trouvée." },
        { type: "question", content: "Avec qui tu te sens le plus toi-même ?", options: ["Personne pour l'instant", "Un adulte de confiance", "Un ami en ligne", "Un ami dans ma vie"] },
        { type: "entity-bubble", content: "Même une seule personne qui te comprend change tout." },
        { type: "interaction", gameId: "FriendBridge", content: "Tisse un lien avec quelqu'un que tu apprécies." },
        { type: "entity-bubble", content: "Les liens se construisent doucement. Fil par fil." },
        { type: "formula", content: "Il y a quelqu'un, quelque part, qui me comprendra." },
        { type: "action", content: "Un message, un sourire, un mot. Le premier fil du lien." }
      ]
    },
    {
      id: "soli_p5",
      title: "Quand un ami proche s'éloigne",
      subtitle: "Traverser la distance dans une amitié",
      magicFormula: "Les amitiés changent. Elles ne meurent pas toujours.",
      moral: "Un ami qui s'éloigne traverse souvent quelque chose lui aussi.",
      steps: [
        { type: "entity-intro", content: "Quelqu'un dont tu étais proche s'éloigne ?" },
        { type: "question", content: "Cet éloignement, tu le ressens comment ?", options: ["Comme un abandon", "Avec de la colère", "Avec de la tristesse", "Avec de l'incompréhension"] },
        { type: "entity-bubble", content: "Les amitiés traversent des saisons. Celle-là est peut-être juste hivernale." },
        { type: "interaction", gameId: "HeartWarm", content: "Réchauffe ce lien qui s'est refroidi." },
        { type: "entity-bubble", content: "Même de loin, un lien peut rester vivant." },
        { type: "formula", content: "Les amitiés changent. Elles ne meurent pas toujours." },
        { type: "action", content: "Un signe de vie vers cet ami. Sans attente de retour." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // LUNA — La Confiance en soi
  // ═══════════════════════════════════════════════════════════
  luna: [
    {
      id: "luna_p1",
      title: "Quand je ne me sens pas assez bien",
      subtitle: "Retrouver sa valeur intérieure",
      magicFormula: "Je suis assez. Exactement comme je suis maintenant.",
      moral: "Se sentir pas assez vient souvent de se comparer à une image impossible.",
      steps: [
        { type: "entity-intro", content: "Ce sentiment de ne pas être assez... je le connais bien." },
        { type: "question", content: "Pas assez par rapport à quoi ?", options: ["Par rapport aux autres", "Par rapport à ce qu'on attend de moi", "Par rapport à ce que je voudrais être", "Par rapport à tout"] },
        { type: "entity-bubble", content: "Cette comparaison n'est pas juste. Elle ne compte pas qui tu es vraiment." },
        { type: "interaction", gameId: "MirrorLight", content: "Oriente la lumière vers ton reflet. Elle vient de toi." },
        { type: "entity-bubble", content: "Tu viens de voir ta propre lumière. Elle a toujours été là." },
        { type: "formula", content: "Je suis assez. Exactement comme je suis maintenant." },
        { type: "action", content: "Dis cette formule à ton reflet ce soir. Même si c'est difficile." }
      ]
    },
    {
      id: "luna_p2",
      title: "Quand j'ai honte de quelque chose",
      subtitle: "Transformer la honte en apprentissage",
      magicFormula: "Ma honte me dit que je tiens à bien faire. C'est une force.",
      moral: "La honte grandit dans le silence. La lumière la rétrécit.",
      steps: [
        { type: "entity-intro", content: "La honte est lourde à porter. On ne la porte pas seul." },
        { type: "question", content: "Cette honte, tu la caches ou tu la montres ?", options: ["Je la cache à tout prix", "Je ne peux pas m'empêcher de la montrer", "Je l'ai dit à quelqu'un", "Je ne sais pas quoi en faire"] },
        { type: "entity-bubble", content: "La honte grandit dans le silence. La lumière la rétrécit." },
        { type: "interaction", gameId: "MirrorLight", content: "Dirige la lumière sur ce que tu veux apprivoiser." },
        { type: "entity-bubble", content: "Regardé en face, ça perd de sa puissance." },
        { type: "formula", content: "Ma honte me dit que je tiens à bien faire. C'est une force." },
        { type: "action", content: "Dis cette chose à quelqu'un de confiance. Juste une fois." }
      ]
    },
    {
      id: "luna_p3",
      title: "Quand je compare sans arrêt",
      subtitle: "Sortir du piège de la comparaison",
      magicFormula: "Je suis sur mon propre chemin. Pas sur celui des autres.",
      moral: "Comparer, c'est regarder la vie de l'autre depuis un angle impossible.",
      steps: [
        { type: "entity-intro", content: "La comparaison est un piège. On compare notre intérieur à l'extérieur des autres." },
        { type: "question", content: "Tu te compares à qui le plus souvent ?", options: ["Des amis proches", "Des élèves de ma classe", "Des gens sur les écrans", "Des frères et sœurs"] },
        { type: "entity-bubble", content: "Tu ne vois que leur surface. Eux aussi ont des doutes." },
        { type: "interaction", gameId: "VictoryJar", content: "Mets dans le bocal tes réussites à toi. Rien que les tiennes." },
        { type: "entity-bubble", content: "Regarde. Tu as ton propre bocal plein." },
        { type: "formula", content: "Je suis sur mon propre chemin. Pas sur celui des autres." },
        { type: "action", content: "Cette semaine, note une chose que TOI tu as réussi. Chaque jour." }
      ]
    },
    {
      id: "luna_p4",
      title: "Quand j'ai peur d'essayer",
      subtitle: "Oser malgré la peur de rater",
      magicFormula: "Essayer, même en ratant, c'est déjà réussir quelque chose.",
      moral: "La peur d'essayer vient souvent de la peur du regard des autres.",
      steps: [
        { type: "entity-intro", content: "Il y a quelque chose que tu veux essayer mais tu n'oses pas ?" },
        { type: "question", content: "Qu'est-ce qui te retient ?", options: ["La peur de rater", "La peur du regard des autres", "La peur de ne pas être assez bon", "Je ne sais pas par où commencer"] },
        { type: "entity-bubble", content: "Tout le monde a eu peur avant d'essayer. Même ceux qui semblent sûrs d'eux." },
        { type: "interaction", gameId: "CourageShield", content: "Construis ton bouclier. Il te protège pendant l'essai." },
        { type: "entity-bubble", content: "Le bouclier n'empêche pas de tomber. Il aide à se relever." },
        { type: "formula", content: "Essayer, même en ratant, c'est déjà réussir quelque chose." },
        { type: "action", content: "Essaie cette chose — juste une fois — cette semaine." }
      ]
    },
    {
      id: "luna_p5",
      title: "Apprendre à se féliciter",
      subtitle: "Être son propre meilleur ami",
      magicFormula: "Je mérite ma propre gentillesse.",
      moral: "On est souvent bien plus dur avec soi-même qu'avec les autres.",
      steps: [
        { type: "entity-intro", content: "Tu es gentil avec tes amis. L'es-tu autant avec toi ?" },
        { type: "question", content: "Quand tu rates quelque chose, tu te dis quoi ?", options: ["Je suis nul", "C'était difficile, je réessaierai", "Je ne méritais pas de réussir", "J'essaie de ne pas y penser"] },
        { type: "entity-bubble", content: "Tu ne dirais jamais ça à ton meilleur ami. Pourquoi à toi ?" },
        { type: "interaction", gameId: "MirrorLight", content: "Envoie de la lumière à ton reflet. Il le mérite." },
        { type: "entity-bubble", content: "Tu viens de te traiter avec douceur. Comment c'était ?" },
        { type: "formula", content: "Je mérite ma propre gentillesse." },
        { type: "action", content: "Ce soir, dis-toi une chose que tu as bien faite. Une seule suffit." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // AMORA — L'Amour
  // ═══════════════════════════════════════════════════════════
  amora: [
    {
      id: "amora_p1",
      title: "Quand j'aime trop fort",
      subtitle: "Aimer sans se perdre",
      magicFormula: "J'aime fort. Et je reste moi en même temps.",
      moral: "Aimer intensément est une richesse. Rester soi aussi est important.",
      steps: [
        { type: "entity-intro", content: "Ton amour est grand. Parfois trop grand pour tenir dans ta poitrine." },
        { type: "question", content: "Quand tu aimes fort, qu'est-ce qui se passe ?", options: ["J'ai peur de perdre l'autre", "Je veux être tout le temps avec lui", "J'oublie de penser à moi", "Je suis très sensible à tout"] },
        { type: "entity-bubble", content: "Aimer fort c'est beau. Rester toi aussi, c'est important." },
        { type: "interaction", gameId: "HeartWarm", content: "Réchauffe ce cœur — le tien d'abord, puis celui de l'autre." },
        { type: "entity-bubble", content: "Ton cœur a besoin d'être rempli par toi aussi." },
        { type: "formula", content: "J'aime fort. Et je reste moi en même temps." },
        { type: "action", content: "Fais une chose pour toi aujourd'hui. Pas pour l'autre." }
      ]
    },
    {
      id: "amora_p2",
      title: "Quand j'ai peur de perdre quelqu'un",
      subtitle: "Vivre avec la peur de la perte",
      magicFormula: "L'amour que j'ai donné reste, même si l'autre s'en va.",
      moral: "La peur de perdre vient de l'importance de ce qu'on a.",
      steps: [
        { type: "entity-intro", content: "Avoir peur de perdre quelqu'un, c'est une preuve d'amour." },
        { type: "question", content: "Cette peur de perdre, elle se manifeste comment ?", options: ["Je vérifie que l'autre est là", "J'évite de trop m'attacher", "Je fais tout pour plaire", "Je pense au pire"] },
        { type: "entity-bubble", content: "Cette peur est normale. L'amour rend vulnérable." },
        { type: "interaction", gameId: "HeartWarm", content: "Réchauffe ton cœur. Il a le droit d'aimer malgré la peur." },
        { type: "entity-bubble", content: "Aimer malgré la peur, c'est du courage." },
        { type: "formula", content: "L'amour que j'ai donné reste, même si l'autre s'en va." },
        { type: "action", content: "Dis à cette personne quelque chose de vrai aujourd'hui." }
      ]
    },
    {
      id: "amora_p3",
      title: "L'amour de soi",
      subtitle: "Devenir son propre meilleur soutien",
      magicFormula: "Je m'aime assez pour prendre soin de moi.",
      moral: "On ne peut pas bien aimer les autres si on ne s'aime pas du tout soi-même.",
      steps: [
        { type: "entity-intro", content: "Est-ce que tu t'aimes, toi ?" },
        { type: "question", content: "Prendre soin de toi, ça ressemble à quoi ?", options: ["Pas grand chose pour l'instant", "Me reposer quand je suis fatigué", "Manger ce que j'aime", "Passer du temps seul"] },
        { type: "entity-bubble", content: "Prendre soin de toi n'est pas égoïste. C'est nécessaire." },
        { type: "interaction", gameId: "HeartWarm", content: "Offre de la chaleur à ton propre cœur." },
        { type: "entity-bubble", content: "Tu mérites ton propre amour." },
        { type: "formula", content: "Je m'aime assez pour prendre soin de moi." },
        { type: "action", content: "Une chose rien que pour toi aujourd'hui. Un vrai cadeau." }
      ]
    },
    {
      id: "amora_p4",
      title: "Les disputes avec ceux qu'on aime",
      subtitle: "La dispute fait partie de l'amour",
      magicFormula: "On peut se disputer et continuer à s'aimer.",
      moral: "Se disputer avec quelqu'un qu'on aime montre qu'on est assez proches pour être vrais.",
      steps: [
        { type: "entity-intro", content: "Se disputer avec quelqu'un qu'on aime, ça fait très mal." },
        { type: "question", content: "Après une dispute avec quelqu'un que tu aimes, tu fais quoi ?", options: ["Je boude longtemps", "Je veux vite réconcilier", "Je dis des choses que je regrette", "Je pleure tout seul"] },
        { type: "entity-bubble", content: "La dispute fait partie des relations vraies. Elle n'efface pas l'amour." },
        { type: "interaction", gameId: "HeartWarm", content: "Réchauffe ce lien qui s'est un peu refroidi." },
        { type: "entity-bubble", content: "L'amour résiste aux disputes. Si les deux le veulent." },
        { type: "formula", content: "On peut se disputer et continuer à s'aimer." },
        { type: "action", content: "Un geste de réconciliation. Même petit. Même sans paroles." }
      ]
    },
    {
      id: "amora_p5",
      title: "Dire je t'aime",
      subtitle: "Oser montrer son amour",
      magicFormula: "L'amour qu'on exprime grandit. L'amour qu'on garde rétrécit.",
      moral: "Dire je t'aime est un des actes les plus courageux qui soit.",
      steps: [
        { type: "entity-intro", content: "Est-ce que tu dis souvent je t'aime à ceux que tu aimes ?" },
        { type: "question", content: "Exprimer ton amour, c'est difficile parce que...", options: ["J'ai peur que ce soit pas réciproque", "Dans ma famille on ne dit pas ça", "J'ai peur d'être ridicule", "Je le montre autrement"] },
        { type: "entity-bubble", content: "L'amour exprimé nourrit les deux personnes." },
        { type: "interaction", gameId: "HeartWarm", content: "Envoie de la chaleur à quelqu'un que tu aimes." },
        { type: "entity-bubble", content: "Tu viens de lui envoyer quelque chose de vrai." },
        { type: "formula", content: "L'amour qu'on exprime grandit. L'amour qu'on garde rétrécit." },
        { type: "action", content: "Dis je t'aime à quelqu'un aujourd'hui. À ta façon." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // PHILO — L'Amitié
  // ═══════════════════════════════════════════════════════════
  philo: [
    {
      id: "philo_p1",
      title: "Quand un ami me blesse",
      subtitle: "Traverser la blessure d'une amitié",
      magicFormula: "Un ami peut me blesser et rester un ami. Si on en parle.",
      moral: "Les amis nous blessent parfois parce qu'ils sont assez proches pour atteindre nos points sensibles.",
      steps: [
        { type: "entity-intro", content: "Un ami t'a dit ou fait quelque chose qui fait encore mal ?" },
        { type: "question", content: "Cette blessure venant d'un ami, c'est pire parce que...", options: ["Il savait que ça me ferait mal", "Je ne m'y attendais pas", "J'ai l'impression de ne pas le connaître", "J'ai honte de l'admettre"] },
        { type: "entity-bubble", content: "Les amis nous touchent là où personne d'autre n'arrive. C'est le risque de l'amitié." },
        { type: "interaction", gameId: "FriendBridge", content: "Pose les bons mots sur le pont entre vous deux." },
        { type: "entity-bubble", content: "Ces mots peuvent réparer. Si tu veux les dire." },
        { type: "formula", content: "Un ami peut me blesser et rester un ami. Si on en parle." },
        { type: "action", content: "Dis-lui une chose vraie sur ce que tu as ressenti." }
      ]
    },
    {
      id: "philo_p2",
      title: "Être jaloux d'un ami",
      subtitle: "Comprendre sa jalousie sans en avoir honte",
      magicFormula: "Ma jalousie me dit ce que je désire. Pas ce que je vaux.",
      moral: "La jalousie envers un ami est normale. La nier est ce qui la rend dangereuse.",
      steps: [
        { type: "entity-intro", content: "On peut être jaloux d'un ami et continuer à l'aimer. Les deux à la fois." },
        { type: "question", content: "Tu es jaloux de quoi chez cet ami ?", options: ["Sa popularité", "Ses résultats ou ses capacités", "Son look ou ses affaires", "L'attention qu'il reçoit"] },
        { type: "entity-bubble", content: "Cette jalousie dit quelque chose sur ce que tu veux pour toi." },
        { type: "interaction", gameId: "VictoryJar", content: "Remplis ton bocal de tes propres richesses." },
        { type: "entity-bubble", content: "Tu as tes propres trésors. Différents, pas inférieurs." },
        { type: "formula", content: "Ma jalousie me dit ce que je désire. Pas ce que je vaux." },
        { type: "action", content: "Félicite cet ami pour quelque chose. Sincèrement. Ça libère." }
      ]
    },
    {
      id: "philo_p3",
      title: "Faire le premier pas",
      subtitle: "Oser aller vers quelqu'un",
      magicFormula: "Le premier pas est petit. L'amitié qui peut naître est grande.",
      moral: "Presque toutes les amitiés ont commencé par quelqu'un qui a osé le premier.",
      steps: [
        { type: "entity-intro", content: "Il y a quelqu'un avec qui tu voudrais être ami mais tu n'oses pas ?" },
        { type: "question", content: "Qu'est-ce qui te retient de faire le premier pas ?", options: ["Peur d'être rejeté", "Je ne sais pas quoi dire", "J'ai peur d'avoir l'air ridicule", "Je sais pas s'il veut être mon ami"] },
        { type: "entity-bubble", content: "Lui aussi il attend peut-être que quelqu'un ose." },
        { type: "interaction", gameId: "FriendBridge", content: "Construis le pont. Le premier fil, c'est toi." },
        { type: "entity-bubble", content: "Le pont est là. Tu n'as qu'à faire un pas dessus." },
        { type: "formula", content: "Le premier pas est petit. L'amitié qui peut naître est grande." },
        { type: "action", content: "Un mot, un sourire, une question. Cette semaine." }
      ]
    },
    {
      id: "philo_p4",
      title: "Perdre un ami",
      subtitle: "Traverser la fin d'une amitié",
      magicFormula: "Chaque amitié, même finie, m'a appris quelque chose.",
      moral: "La fin d'une amitié est une vraie perte qui mérite d'être pleurée.",
      steps: [
        { type: "entity-intro", content: "Perdre un ami, c'est une vraie douleur. Pas moins réelle que les autres." },
        { type: "question", content: "Cette amitié qui s'est terminée, comment tu la portes ?", options: ["Avec beaucoup de tristesse", "Avec de la colère", "Avec de l'incompréhension", "Je fais comme si ça allait"] },
        { type: "entity-bubble", content: "Ce que vous avez vécu ensemble a existé. Ça ne disparaît pas." },
        { type: "interaction", gameId: "TearJar", content: "Laisse sortir ce que tu portes de cette amitié perdue." },
        { type: "entity-bubble", content: "Tu as le droit d'être triste. Et de te souvenir du beau." },
        { type: "formula", content: "Chaque amitié, même finie, m'a appris quelque chose." },
        { type: "action", content: "Note une chose belle que cette amitié t'a apportée." }
      ]
    },
    {
      id: "philo_p5",
      title: "Être un bon ami",
      subtitle: "Donner et recevoir dans l'amitié",
      magicFormula: "Je peux être un bon ami tout en restant moi-même.",
      moral: "Un bon ami n'est pas parfait. Il est présent et sincère.",
      steps: [
        { type: "entity-intro", content: "Être un bon ami, c'est quelque chose qui s'apprend." },
        { type: "question", content: "Dans une amitié, tu donnes surtout quoi ?", options: ["De l'écoute", "De la présence", "Des conseils", "De la loyauté"] },
        { type: "entity-bubble", content: "Tu as déjà plein de choses à offrir. Tu le sais ?" },
        { type: "interaction", gameId: "FriendBridge", content: "Renforce le pont. Chaque mot compte." },
        { type: "entity-bubble", content: "Les bons amis ne sont pas parfaits. Ils sont là." },
        { type: "formula", content: "Je peux être un bon ami tout en restant moi-même." },
        { type: "action", content: "Fais une chose pour un ami aujourd'hui. Sans attendre de retour." }
      ]
    }
  ]
}
