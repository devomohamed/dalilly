declare module namespace {



  export interface Country {
      id: number;
      name: string;
      image: string;
  }

  export interface City {
      id: number;
      name: string;
      country_id: number;
      country: Country;
  }

  export interface Region {
      id: number;
      name: string;
  }

  export interface Seller {
      id: number;
      name: string;
      s_name: string;
      email: string;
      mobile: any;
      image: string;
      address?: any;
  }

  export interface Category3 {
      name: string;
      icon: string;
      image: string;
      banner: string;
      is_color: number;
      is_size: number;
      id: number;
      parent_id?: any;
      has_category: boolean;
  }

  export interface Category2 {
      name: string;
      icon: string;
      image: string;
      banner: string;
      is_color: number;
      is_size: number;
      id: number;
      parent_id: number;
      category: Category3;
      has_category: boolean;
  }

  export interface Category {
      name: string;
      icon: string;
      image: string;
      banner: string;
      is_color: number;
      is_size: number;
      id: number;
      parent_id: number;
      category: Category2;
      has_category: boolean;
  }

  export interface Profile {
      id: number;
      name: string;
      s_name: string;
      mobile: any;
      image: string;
      is_public: number;
      rate?: number;
      no_adds?: number;
  }

  export interface Package {
      id?: number;
      name: string;
      days?: number;
  }

  export interface Store {
      id: number;
      name: string;
      image: string;
      rate: number;
      no_adds: number;
  }

  export interface Data {
      id: number;
      name: string;
      price: number;
      image: string;
      category_id: number;
      user_id: number;
      quantity: number;
      valid_to: string;
      special_package_expire_at?: any;
      city_id?: number;
      store_id?: number;
      is_online: number;
      viewers: number;
      code?: number;
      offer: number;
      created_at: string;
      region_id?: number;
      calls: number;
      chats: number;
      special_due_date: string;
      package_type_country_id?: number;
      distance: number;
      expire_in: string;
      online_for: number;
      rate: number;
      offers: number;
      city: City;
      region: Region;
      is_like: boolean;
      seller: Seller;
      category: Category;
      profile: Profile;
      package: Package;
      num_image: number;
      comments: number;

  }

  export interface Products {
      current_page: number;
      data: Data[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      next_page_url?: any;
      path: string;
      per_page: number;
      prev_page_url?: any;
      to: number;
      total: number;
  }

  export interface Color {
      id: number;
      color: string;
      name: string;
  }

  export interface Category4 {
      id: number;
      name: string;
      image: string;
      banner: string;
      icon: string;
      parent_id: number;
      has_category: boolean;
      categories: any[];
  }

  export interface Size {
      id: number;
      size: string;
  }

  export interface Option {
      name: any;
      id: number;
  }

  export interface Property {
      id: number;
      name: string;
      type_id: number;
      type: string;
      options: Option[];
  }

  export interface Store2 {
      id: number;
      image: string;
      email?: any;
      mobile: number;
      name: string;
      rate: number;
      no_adds: number;
  }

  export interface User {
      id: number;
      name: string;
      image: string;
      email: string;
      mobile: any;
      is_public: number;
  }




}

