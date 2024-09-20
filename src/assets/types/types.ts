export interface blogPostType {
  title: string
  category: string
  imageUrl: string
}

export interface latestProperty {
  title: string
  address: string
  imageUrl: string
  features: {
    bedrooms: number
    bathrooms: number
    area: number
    parking: number
  }
}
export interface nearbyProperty {
  title: string
  address: string
  imageUrl: string
  features: {
    bedrooms: number
    bathrooms: number
    area: number
    parking: number
  }
}
export interface topRatedProperty {
  title: string
  address: string
  imageUrl: string
  rating: number
}
export interface featuredProperty {
  id: number,
  title: string,
  address: string
  imageUrl: string
  price?: string
  features_images: string[]
  features?: {
    bedrooms?: number
    bathrooms?: number
    area?: number
    parking?: number
  }
}