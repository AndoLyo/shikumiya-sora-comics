export type SiteData = {
  artistName: string;
  subtitle?: string;
  catchcopy?: string;
  heroImage?: string;
  profileImage?: string;
  bio?: string;
  motto?: string;
  location?: string;
  artStyle?: string;
  tools?: string[];
  stats?: string[];
  skills?: string[];
  works: { src: string; title: string }[];
  snsX?: string;
  snsInstagram?: string;
  snsPixiv?: string;
  snsNote?: string;
  snsOther?: string;
  email?: string;
};

export const siteData: SiteData = {
  artistName: "Sora",
  subtitle: "漫画家 & イラストレーター",
  catchcopy: "物語は、一コマから始まる",
  bio: "漫画とイラストを描いています。AI画像生成を使って、新しい表現を探求中。",
  motto: "描きたいものを、描きたいように",
  email: "ryoya112@outlook.com",
  snsX: "https://x.com/sora_manga_test",
  snsInstagram: "https://instagram.com/sora_manga_test",
  works: [],
};
