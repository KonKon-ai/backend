import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    submit: Schema.Attribute.Component<'shared.link', false>;
    titleOne: Schema.Attribute.String;
    titleTwo: Schema.Attribute.String;
  };
}

export interface BlocksParallaxBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_parallax_banners';
  info: {
    displayName: 'Parallax Banner';
  };
  attributes: {
    parallaxBanner: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface BlocksSignupBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_signup_banners';
  info: {
    displayName: 'Signup Banner';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'shared.link', false>;
    signupLink: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlocksSponsors extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sponsors';
  info: {
    displayName: 'Sponsors';
  };
  attributes: {
    sponsor: Schema.Attribute.Component<'shared.link', true>;
    tier: Schema.Attribute.String;
  };
}

export interface BlocksStoryCategories extends Struct.ComponentSchema {
  collectionName: 'components_blocks_story_categories';
  info: {
    displayName: 'Story Categories';
  };
  attributes: {
    category: Schema.Attribute.Component<'shared.category-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_cards';
  info: {
    displayName: 'Category Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'blocks.parallax-banner': BlocksParallaxBanner;
      'blocks.signup-banner': BlocksSignupBanner;
      'blocks.sponsors': BlocksSponsors;
      'blocks.story-categories': BlocksStoryCategories;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.category-card': SharedCategoryCard;
      'shared.link': SharedLink;
    }
  }
}
