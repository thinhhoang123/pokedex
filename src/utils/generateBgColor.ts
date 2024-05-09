const generateBgColor = (type: string) => {
  const bgGradientToRight = 'bg-gradient-to-r';
  switch (type) {
    case 'grass':
      return `${bgGradientToRight} from-grass-400 to-grass-500 hover:shadow-xl hover:shadow-grass-500/40`;
    case 'fire':
      return `${bgGradientToRight} from-fire-400 to-fire-500 hover:shadow-xl hover:shadow-fire-500/40`;
    case 'water':
      return `${bgGradientToRight} from-water-400 to-water-500 hover:shadow-xl hover:shadow-water-500/40`;
    case 'bug':
      return `${bgGradientToRight} from-bug-400 to-bug-500 hover:shadow-xl hover:shadow-bug-500/40`;
    case 'normal':
      return `${bgGradientToRight} from-normal-400 to-normal-500 hover:shadow-xl hover:shadow-normal-500/40`;
    case 'poison':
      return `${bgGradientToRight} from-poison-400 to-poison-500 hover:shadow-xl hover:shadow-poison-500/40`;
    case 'electric':
      return `${bgGradientToRight} from-electric-400 to-electric-500 hover:shadow-xl hover:shadow-electric-500/40`;
    case 'ground':
      return `${bgGradientToRight} from-ground-400 to-ground-500 hover:shadow-xl hover:shadow-ground-500/40`;
    case 'fairy':
      return `${bgGradientToRight} from-fairy-400 to-fairy-500 hover:shadow-xl hover:shadow-fairy-500/40`;
    case 'fighting':
      return `${bgGradientToRight} from-fighting-400 to-fighting-500 hover:shadow-xl hover:shadow-fighting-500/40`;
    case 'psychic':
      return `${bgGradientToRight} from-psychic-400 to-psychic-500 hover:shadow-xl hover:shadow-psychic-500/40`;
    case 'rock':
      return `${bgGradientToRight} from-rock-400 to-rock-500 hover:shadow-xl hover:shadow-rock-500/40`;
    case 'ghost':
      return `${bgGradientToRight} from-ghost-400 to-ghost-500 hover:shadow-xl hover:shadow-ghost-500/40`;
    case 'ice':
      return `${bgGradientToRight} from-ice-400 to-ice-500 hover:shadow-xl hover:shadow-ice-500/40`;
    case 'dragon':
      return `${bgGradientToRight} from-dragon-400 to-dragon-500 hover:shadow-xl hover:shadow-dragon-500/40`;
    case 'steel':
      return `${bgGradientToRight} from-steel-400 to-steel-500 hover:shadow-xl hover:shadow-steel-500/40`;
    case 'flying':
      return `${bgGradientToRight} from-flying-400 to-flying-500 hover:shadow-xl hover:shadow-flying-500/40`;
    case 'dark':
      return `${bgGradientToRight} from-dark-400 to-dark-500 hover:shadow-xl hover:shadow-dark-500/40`;
    default:
      return `${bgGradientToRight} from-normal-400 to-normal-500 hover:shadow-xl hover:shadow-normal-500/40`;
  }
};

export default generateBgColor;
