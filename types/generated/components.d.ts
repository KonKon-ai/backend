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
    description: '';
    displayName: 'Parallax Banner';
  };
  attributes: {
    backgroundLayer: Schema.Attribute.Media<'images', true>;
    batmanLayer: Schema.Attribute.Media<'images', true>;
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
    description: '';
    displayName: 'Sponsors';
  };
  attributes: {
    sponsors: Schema.Attribute.Relation<'oneToMany', 'api::sponsor.sponsor'>;
    tierName: Schema.Attribute.String;
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
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.link', false>;
    nav_items: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
    social_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-link.social-link'
    >;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'shared.link', false>;
    nav_items: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
    social_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-link.social-link'
    >;
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

export interface SharedFormInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_inputs';
  info: {
    displayName: 'Form Input';
  };
  attributes: {
    inputId: Schema.Attribute.String;
    inputType: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholderText: Schema.Attribute.String;
    rows: Schema.Attribute.Integer;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
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

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'listItem';
  };
  attributes: {
    listItem: Schema.Attribute.Text;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
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
      'shared.form-input': SharedFormInput;
      'shared.link': SharedLink;
      'shared.list-item': SharedListItem;
      'shared.team-member': SharedTeamMember;
      'shared.video': SharedVideo;
    }
  }
}
