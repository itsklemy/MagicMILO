import React, { useState } from 'react';
import './LegalScreen.css';

const CGU = `CONDITIONS GÉNÉRALES D'UTILISATION
Magic Milo — Ora Studio
Dernière mise à jour : avril 2026

ARTICLE 1 — ÉDITEUR
L'application Magic Milo est éditée par Ora Studio, entreprise individuelle.
Contact : orastudio.org@gmail.com

ARTICLE 2 — ACCEPTATION
L'utilisation de l'application implique l'acceptation des présentes CGU par le représentant légal de l'enfant utilisateur. Magic Milo est destinée aux enfants de 6 à 10 ans et doit être utilisée sous la responsabilité d'un parent ou tuteur légal.

ARTICLE 3 — DESCRIPTION DU SERVICE
Magic Milo propose :
- Une version gratuite avec accès limité aux parcours émotionnels.
- Une version Premium (sur abonnement) avec accès complet à tous les parcours, entités et mini-jeux.

L'application n'est pas un dispositif médical ou thérapeutique. Elle ne remplace pas un accompagnement professionnel. En cas de difficultés persistantes, consultez un professionnel de santé.

ARTICLE 4 — COMPTE UTILISATEUR
La version gratuite est accessible sans compte. Un compte est requis uniquement pour accéder au Premium, sauvegarder la progression, ou restaurer un abonnement. Le compte est créé via Google ou Apple. Ora Studio ne stocke aucun mot de passe.

ARTICLE 5 — PROPRIÉTÉ INTELLECTUELLE
Tous les contenus de l'application (textes, illustrations, personnages, sons, animations) sont la propriété exclusive d'Ora Studio. Les personnages Milo, Brumo, Ignis, Pluma, Nox, Soli et Luna sont des créations originales protégées.

Toute reproduction sans autorisation écrite est interdite.

ARTICLE 6 — LIMITATION DE RESPONSABILITÉ
Ora Studio ne peut être tenu responsable des dommages résultant de l'utilisation ou de l'impossibilité d'utiliser l'application, ni de l'inadéquation de l'application aux besoins spécifiques de l'enfant.

ARTICLE 7 — DROIT APPLICABLE
Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français sont compétents.

ARTICLE 8 — CONTACT
orastudio.org@gmail.com`;

const CGV = `CONDITIONS GÉNÉRALES DE VENTE
Magic Milo Premium — Ora Studio
Dernière mise à jour : avril 2026

ARTICLE 1 — VENDEUR
Ora Studio, entreprise individuelle.
Contact : orastudio.org@gmail.com

ARTICLE 2 — TARIFS
- Abonnement mensuel : 4,99 € TTC / mois
- Abonnement annuel : 39,99 € TTC / an (économie de 33%)

Les prix peuvent être modifiés avec un préavis de 30 jours.

ARTICLE 3 — PAIEMENT
Le paiement s'effectue via :
- Apple App Store (iOS)
- Google Play Store (Android)
- Stripe (web)

Ora Studio ne stocke aucune donnée bancaire. Les transactions sont gérées par Apple, Google ou Stripe.

ARTICLE 4 — RÉSILIATION

Vous pouvez résilier à tout moment, sans frais.

Sur iPhone / iPad :
1. Ouvrez les Réglages de votre iPhone
2. Appuyez sur votre prénom en haut
3. Allez dans Abonnements
4. Sélectionnez Magic Milo Premium
5. Appuyez sur Annuler l'abonnement

Sur Android :
1. Ouvrez Google Play Store
2. Appuyez sur votre icône profil
3. Allez dans Paiements et abonnements
4. Sélectionnez Magic Milo
5. Appuyez sur Annuler l'abonnement

Via le web :
Contactez-nous à orastudio.org@gmail.com

L'accès Premium reste actif jusqu'à la fin de la période payée. Aucun remboursement au prorata.

ARTICLE 5 — DROIT DE RÉTRACTATION
Vous disposez de 14 jours pour vous rétracter. Ce droit ne s'applique plus si vous avez commencé à utiliser les contenus Premium immédiatement après la souscription.

Pour exercer ce droit : orastudio.org@gmail.com

ARTICLE 6 — CONTENU PREMIUM
L'abonnement donne accès à :
- 30 parcours émotionnels approfondis
- L'entité Luna (confiance en soi)
- Tous les mini-jeux avancés
- La sauvegarde de la progression
- Les nouveaux contenus mensuels

ARTICLE 7 — DROIT APPLICABLE
Les présentes CGV sont soumises au droit français.
Contact : orastudio.org@gmail.com`;

const PRIVACY = `POLITIQUE DE CONFIDENTIALITÉ
Magic Milo — Ora Studio
Dernière mise à jour : avril 2026
Conforme RGPD et COPPA

ARTICLE 1 — RESPONSABLE DU TRAITEMENT
Ora Studio, entreprise individuelle.
Contact : orastudio.org@gmail.com

ARTICLE 2 — DONNÉES COLLECTÉES

Version gratuite (sans compte) :
Aucune donnée personnelle identifiable n'est collectée. Le fonctionnement est entièrement local à l'appareil.

Version Premium (avec compte) :
- Email du parent / tuteur (via Google ou Apple)
- Identifiant unique du compte
- Données de progression (stockées localement)

Aucune donnée directement identifiable de l'enfant n'est collectée (pas de nom, pas de photo, pas de localisation).

ARTICLE 3 — PROTECTION DES ENFANTS
Magic Milo applique les principes les plus stricts :
- Aucune donnée de l'enfant collectée directement
- Le compte est toujours créé par un parent ou tuteur
- Aucune publicité dans l'application
- Aucun réseau social intégré
- Aucune donnée vendue ou partagée à des fins commerciales

ARTICLE 4 — FINALITÉS
Les données sont utilisées uniquement pour :
- Gérer l'authentification et le compte Premium
- Traiter l'abonnement (paiement, renouvellement)
- Sauvegarder la progression
- Répondre aux demandes de support

ARTICLE 5 — DURÉE DE CONSERVATION
- Données de compte : durée de l'abonnement + 12 mois
- Données de progression : sur l'appareil, supprimées à la désinstallation
- Données de paiement : gérées par Apple, Google ou Stripe

ARTICLE 6 — PARTAGE DES DONNÉES
Ora Studio ne vend pas vos données. Elles peuvent être partagées uniquement avec :
- Apple / Google : pour l'authentification et les abonnements
- Stripe : pour les paiements web
- Autorités légales : si la loi l'exige

ARTICLE 7 — VOS DROITS
Conformément au RGPD, vous disposez des droits d'accès, rectification, effacement, portabilité et opposition.

Pour exercer ces droits : orastudio.org@gmail.com
Nous répondrons dans un délai de 30 jours.

Vous pouvez aussi contacter la CNIL : www.cnil.fr

ARTICLE 8 — COOKIES
L'application mobile n'utilise pas de cookies. La version web utilise uniquement des cookies techniques nécessaires au fonctionnement.

ARTICLE 9 — SÉCURITÉ
Toutes les communications sont chiffrées (HTTPS). L'authentification est gérée par Google et Apple via leurs propres certifications de sécurité.

ARTICLE 10 — CONTACT
orastudio.org@gmail.com`;

const DOCS = {
  cgu:     { title: "Conditions d'utilisation", content: CGU },
  cgv:     { title: "Conditions de vente",      content: CGV },
  privacy: { title: "Confidentialité",           content: PRIVACY },
};

export default function LegalScreen({ initialDoc = 'cgu', onClose }) {
  const [activeDoc, setActiveDoc] = useState(initialDoc);
  const doc = DOCS[activeDoc];

  return (
    <div className="legal-screen">

      {/* Header */}
      <div className="legal-header">
        <button className="legal-back" onClick={onClose}>← Retour</button>
        <h1 className="legal-title">Mentions légales</h1>
        <div style={{ width: 60 }} />
      </div>

      {/* Onglets */}
      <div className="legal-tabs">
        {Object.entries(DOCS).map(([key, d]) => (
          <button
            key={key}
            className={`legal-tab ${activeDoc === key ? 'legal-tab--active' : ''}`}
            onClick={() => setActiveDoc(key)}
          >
            {d.title}
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div className="legal-content">
        <pre className="legal-text">{doc.content}</pre>
      </div>

    </div>
  );
}