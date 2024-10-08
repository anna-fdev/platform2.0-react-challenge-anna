export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: BreedDetailsFull[];
  favourite: unknown;
};

export type BreedDetailsShort = {
  breeds?: BreedDetailsFull[];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type BreedDetailsFull = {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
};

export type Favourite = {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: null;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

export type AddFavorite = {
  id: number;
  message: string;
};

export type RemoveFavorite = {
  message: string;
};
