import logomarvel from "../../assets/logo/logomarvel.png";
import imgmarvel from "../../assets/headerhomepage/marvel.jpg";
import logostarwars from "../../assets/logo/logosw.png";
import imgstarwars from "../../assets/headerhomepage/starwars.jpg";
import logoanimes from "../../assets/logo/logoanimes.jpg";
import imganimes from "../../assets/headerhomepage/manga.jpg";
import logodc from "../../assets/logo/logodc.png";
import imgdc from "../../assets/headerhomepage/dc2.jpg";
import logoautres from "../../assets/logo/logoautres.png";
import imgautres from "../../assets/headerhomepage/dessinAnime.jpg";

const dataUnivers = {
  marvel: {
    categ: "Marvel Comics",
    logo: logomarvel,
    image: imgmarvel,
    details: `Marvel est à l'origine une société publiant des "comics", les bandes dessinées américaines par opposition à l'école franco-belge de la BD ou de la japonaise pour les Mangas. Fondé en 1939 par Martin Goodman, éditeur de "pulps", elle porte, alors, le nom de Timely Publications. Même si elle commence par publier des séries de super-héros au début des années 40, elle les abandonne, purement et simplement, au cours de la décennie suivante. Au début des années 60, elle prend le nom définitif de Marvel et réinvestit le terrain des super-héros qu'elle ne quittera plus jamais. La société va alors connaitre des hauts et des bas étant régulièrement rachetée ou dépecée, connaissant même une faillite, en bonne et due forme en 1996. Finalement et à la surprise générale, la Walt Disney Company fait main-basse, en août 2009, sur Marvel. Le firme de Mickey conforte ainsi son -déjà fort- positionnement dans le divertissement familial à forte valeur ajoutée, permettant une déclinaison cinéma, marchandisage et parcs à thèmes. `,
    bg: "#ef41239d",
  },
  starwars: {
    categ: "George Lucas",
    logo: logostarwars,
    image: imgstarwars,
    details: `Dans un univers très lointain, il y a de très nombreuses années, de nombreux peuples existaient sur de nombreuses planètes. Certains pouvaient maîtriser « la Force » qui entoure chacun. Ceux qui en font bon usage sont les Jedis et ceux qui au contraire se servent de la Force à des fins malfaisantes sont les Siths. Dans l’épisode 1, tout se passe à peu près bien avec une République galactique qui dirige tout ce petit monde et des Siths que l’on croit disparus… Yoda est un Jedi très puissant qui fera preuve d’une grande sagesse tout au long des aventures de Star Wars. Un enfant, Anakin Skywalker présente une grande sensibilité à la force et le jedi Obi Wan Kenobi va le prendre sous son aile pour devenir un futur grand jedi. Malheureusement, Palpatine un sénateur de la République se trouve en fait être un des derniers Siths (Dark Sidious) et va foutre le bordel… Il va réussir à retourner le cerveau d’Anakin d’autant plus facilement que ce dernier perd sa femme Padmé Amidala qui met au monde leurs 2 enfants Luke et Leia. Anakin va donc devenir le tristement célèbre Dark Vador. Alors que la République et les jedis tentent de sauver le monde grâce à une armée de soldats clone, cela se retourne contre eux et Dark Sidious aidé de Dark Vador va faire exécuter tous les jedis !`,
    bg: "#ffeb3c86",
  },
  manga: {
    categ: "Shueisha",
    logo: logoanimes,
    image: imganimes,
    details: `
    Un manga (漫画) est une bande dessinée japonaise. La plupart des mangas se conforment à un style développé au Japon à la fin du XIXe siècle, alors que la forme a une longue préhistoire dans l'art japonais antérieur. Au Japon, le terme manga désigne plus généralement la bande dessinée, quelle que soit son origine. En Occident, le mot « manga » désigne une bande dessinée japonaise, mais aussi parfois une bande dessinée non japonaise respectant les codes des productions populaires japonaises ou pour nommer, par métonymie, d'autres produits visuels rappelant certaines de ces bandes dessinées (dessins animés, style graphique,...).
    Les mangas se lisent généralement de droite à gauche. En raison du rythme élevé de parution et pour limiter le coût d'impression, la plupart des mangas sont dessinés en noir et blanc, mis à part la couverture.
    Les deux premiers pays les plus consommateurs de mangas sont le Japon et la France.
    La personne réalisant des mangas est appelée mangaka.`,
    bg: "#faa22f8f",
  },
  dccomics: {
    categ: "DC Comics",
    logo: logodc,
    image: imgdc,
    details: `Monde imaginaire peuplé de super-héros et de super-méchants, le DCU (DC Universe) s’est créé à partir de nombreuses histoires écrites et dessinées par plusieurs artistes. Ce monde tentaculaire est né grâce à Malcolm Wheeler-Nicholson, un homme de formation militaire devenu auteur et éditeur. Il fonde en 1934 National Allied Publications, la maison d’édition qui est désormais connue sous le nom de DC Comics. C’est notamment lui qui est à l’origine du format des BD, et du ton humoristique propre à DC Comics. .`,
    bg: "#0175f288",
  },
  autres: {
    categ: "autre",
    logo: logoautres,
    image: imgautres,
    details: `La page regroupe des personnages inclassables dans les autres pages. En effet, nous pouvons passer de Chuck Norris à bébé Jack, en passant par Buffy contre les vampires. Autant de monde qui vont ravir petits et grands, fan de frissons comme d'action trouverons leur bonheur. Au programme: les tortues ninja, les indestructibles, Alien vs Predator, Walker Texas Ranger,..`,
    bg: "#ac007a99",
  },
};

export default dataUnivers;
