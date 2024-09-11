export interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      official_artwork: {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: string | null;
        back_shiny: string;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
    };
    versions: {
      generation_i: {
        'red-blue': {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      generation_ii: {
        crystal: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_iii: {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        firered_leafgreen: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        ruby_sapphire: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_iv: {
        diamond_pearl: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        heartgold_soulsilver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        platinum: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_v: {
        black_white: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      generation_vi: {
        omega_ruby_alpha_sapphire: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        x_y: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_vii: {
        icons: {
          front_default: string;
          front_female: string | null;
        };
        ultra_sun_ultra_moon: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_viii: {
        icons: {
          front_default: string;
          front_female: string | null;
        };
      };
    };
  }