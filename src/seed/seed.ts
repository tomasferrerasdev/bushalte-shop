interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      images: ['/images/shirt.png'],
      inStock: 7,
      price: 75,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'bushalte_shirt',
      type: 'shirts',
      tags: ['sweatshirt'],
      title: 'Büshalte shirt',
      gender: 'men',
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ['/images/mug.png'],
      inStock: 5,
      price: 200,
      sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
      slug: 'bushalte_mug',
      type: 'shirts',
      tags: ['jacket'],
      title: 'Büshalte mug',
      gender: 'men',
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ['/images/cap.png'],
      inStock: 10,
      price: 130,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      slug: 'bushalte_cap',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Büshalte cap',
      gender: 'men',
    },
  ],
};
