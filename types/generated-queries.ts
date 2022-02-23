import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars["String"]>;
  aspect_ratio?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
  border?: InputMaybe<Scalars["String"]>;
  color?: InputMaybe<Scalars["String"]>;
  color_space?: InputMaybe<Scalars["String"]>;
  crop?: InputMaybe<Scalars["String"]>;
  default_image?: InputMaybe<Scalars["String"]>;
  delay?: InputMaybe<Scalars["String"]>;
  density?: InputMaybe<Scalars["String"]>;
  dpr?: InputMaybe<Scalars["String"]>;
  effect?: InputMaybe<Scalars["String"]>;
  fetch_format?: InputMaybe<Scalars["String"]>;
  flags?: InputMaybe<Scalars["String"]>;
  format?: InputMaybe<Scalars["String"]>;
  gravity?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["String"]>;
  opacity?: InputMaybe<Scalars["String"]>;
  overlay?: InputMaybe<Scalars["String"]>;
  page?: InputMaybe<Scalars["String"]>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["String"]>;
  radius?: InputMaybe<Scalars["String"]>;
  transformation?: InputMaybe<Scalars["String"]>;
  underlay?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["String"]>;
  x?: InputMaybe<Scalars["String"]>;
  y?: InputMaybe<Scalars["String"]>;
  zoom?: InputMaybe<Scalars["String"]>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  encoding?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mimetype?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars["String"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  viewsHash: Scalars["String"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single Post item.  */
  createPost?: Maybe<Post>;
  /**  Create multiple Post items.  */
  createPosts?: Maybe<Array<Maybe<Post>>>;
  /**  Create a single ProfileImage item.  */
  createProfileImage?: Maybe<ProfileImage>;
  /**  Create multiple ProfileImage items.  */
  createProfileImages?: Maybe<Array<Maybe<ProfileImage>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single Post item by ID.  */
  deletePost?: Maybe<Post>;
  /**  Delete multiple Post items by ID.  */
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  /**  Delete a single ProfileImage item by ID.  */
  deleteProfileImage?: Maybe<ProfileImage>;
  /**  Delete multiple ProfileImage items by ID.  */
  deleteProfileImages?: Maybe<Array<Maybe<ProfileImage>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  /**  Update a single Post item by ID.  */
  updatePost?: Maybe<Post>;
  /**  Update multiple Post items by ID.  */
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  /**  Update a single ProfileImage item by ID.  */
  updateProfileImage?: Maybe<ProfileImage>;
  /**  Update multiple ProfileImage items by ID.  */
  updateProfileImages?: Maybe<Array<Maybe<ProfileImage>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreatePostArgs = {
  data?: InputMaybe<PostCreateInput>;
};

export type MutationCreatePostsArgs = {
  data?: InputMaybe<Array<InputMaybe<PostsCreateInput>>>;
};

export type MutationCreateProfileImageArgs = {
  data?: InputMaybe<ProfileImageCreateInput>;
};

export type MutationCreateProfileImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProfileImagesCreateInput>>>;
};

export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};

export type MutationDeletePostArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePostsArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteProfileImageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProfileImagesArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationUpdatePostArgs = {
  data?: InputMaybe<PostUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdatePostsArgs = {
  data?: InputMaybe<Array<InputMaybe<PostsUpdateInput>>>;
};

export type MutationUpdateProfileImageArgs = {
  data?: InputMaybe<ProfileImageUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateProfileImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProfileImagesUpdateInput>>>;
};

export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
  SecretNotSet = "SECRET_NOT_SET",
}

/**  A keystone list  */
export type Post = {
  __typename?: "Post";
  author?: Maybe<User>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneInput>;
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PostRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<PostCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<PostWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneInput>;
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<PostWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<PostWhereInput>>>;
  author?: InputMaybe<UserWhereInput>;
  author_is_null?: InputMaybe<Scalars["Boolean"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_i?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_i?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_i?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  description_not_i?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_contains_i?: InputMaybe<Scalars["String"]>;
  title_ends_with?: InputMaybe<Scalars["String"]>;
  title_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_i?: InputMaybe<Scalars["String"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_contains_i?: InputMaybe<Scalars["String"]>;
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  title_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  title_not_i?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  title_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  title_starts_with?: InputMaybe<Scalars["String"]>;
  title_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type PostWhereUniqueInput = {
  id: Scalars["ID"];
};

export type PostsCreateInput = {
  data?: InputMaybe<PostCreateInput>;
};

export type PostsUpdateInput = {
  data?: InputMaybe<PostUpdateInput>;
  id: Scalars["ID"];
};

/**  A keystone list  */
export type ProfileImage = {
  __typename?: "ProfileImage";
  altText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  photo?: Maybe<User>;
};

export type ProfileImageCreateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  photo?: InputMaybe<UserRelateToOneInput>;
};

export type ProfileImageRelateToOneInput = {
  connect?: InputMaybe<ProfileImageWhereUniqueInput>;
  create?: InputMaybe<ProfileImageCreateInput>;
  disconnect?: InputMaybe<ProfileImageWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type ProfileImageUpdateInput = {
  altText?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["Upload"]>;
  photo?: InputMaybe<UserRelateToOneInput>;
};

export type ProfileImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProfileImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProfileImageWhereInput>>>;
  altText?: InputMaybe<Scalars["String"]>;
  altText_contains?: InputMaybe<Scalars["String"]>;
  altText_contains_i?: InputMaybe<Scalars["String"]>;
  altText_ends_with?: InputMaybe<Scalars["String"]>;
  altText_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_i?: InputMaybe<Scalars["String"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not?: InputMaybe<Scalars["String"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]>;
  altText_not_contains_i?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with?: InputMaybe<Scalars["String"]>;
  altText_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  altText_not_i?: InputMaybe<Scalars["String"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  altText_not_starts_with?: InputMaybe<Scalars["String"]>;
  altText_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  altText_starts_with?: InputMaybe<Scalars["String"]>;
  altText_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photo?: InputMaybe<UserWhereInput>;
  photo_is_null?: InputMaybe<Scalars["Boolean"]>;
};

export type ProfileImageWhereUniqueInput = {
  id: Scalars["ID"];
};

export type ProfileImagesCreateInput = {
  data?: InputMaybe<ProfileImageCreateInput>;
};

export type ProfileImagesUpdateInput = {
  data?: InputMaybe<ProfileImageUpdateInput>;
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  /**  Search for the Post item with the matching ID.  */
  Post?: Maybe<Post>;
  /**  Search for the ProfileImage item with the matching ID.  */
  ProfileImage?: Maybe<ProfileImage>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Retrieve the meta-data for the Post list.  */
  _PostsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ProfileImage list.  */
  _ProfileImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Post items which match the where clause.  */
  _allPostsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ProfileImage items which match the where clause.  */
  _allProfileImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Post items which match the where clause.  */
  allPosts?: Maybe<Array<Maybe<Post>>>;
  /**  Search for all ProfileImage items which match the where clause.  */
  allProfileImages?: Maybe<Array<Maybe<ProfileImage>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars["String"]>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryProfileImageArgs = {
  where: ProfileImageWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllPostsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortPostsBy>>;
  where?: InputMaybe<PostWhereInput>;
};

export type Query_AllProfileImagesMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProfileImagesBy>>;
  where?: InputMaybe<ProfileImageWhereInput>;
};

export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};

export type QueryAllPostsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortPostsBy>>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryAllProfileImagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortProfileImagesBy>>;
  where?: InputMaybe<ProfileImageWhereInput>;
};

export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortPostsBy {
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SortProfileImagesBy {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
}

export enum SortUsersBy {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  HobbiesAsc = "hobbies_ASC",
  HobbiesDesc = "hobbies_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ImageAsc = "image_ASC",
  ImageDesc = "image_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  MagicAuthIssuedAtAsc = "magicAuthIssuedAt_ASC",
  MagicAuthIssuedAtDesc = "magicAuthIssuedAt_DESC",
  MagicAuthRedeemedAtAsc = "magicAuthRedeemedAt_ASC",
  MagicAuthRedeemedAtDesc = "magicAuthRedeemedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PasswordResetIssuedAtAsc = "passwordResetIssuedAt_ASC",
  PasswordResetIssuedAtDesc = "passwordResetIssuedAt_DESC",
  PasswordResetRedeemedAtAsc = "passwordResetRedeemedAt_ASC",
  PasswordResetRedeemedAtDesc = "passwordResetRedeemedAt_DESC",
  PostsAsc = "posts_ASC",
  PostsDesc = "posts_DESC",
  SkillsAsc = "skills_ASC",
  SkillsDesc = "skills_DESC",
}

/**  A keystone list  */
export type User = {
  __typename?: "User";
  _postsMeta?: Maybe<_QueryMeta>;
  email?: Maybe<Scalars["String"]>;
  hobbies?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<ProfileImage>;
  location?: Maybe<Scalars["String"]>;
  magicAuthIssuedAt?: Maybe<Scalars["String"]>;
  magicAuthRedeemedAt?: Maybe<Scalars["String"]>;
  magicAuthToken_is_set?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  passwordResetIssuedAt?: Maybe<Scalars["String"]>;
  passwordResetRedeemedAt?: Maybe<Scalars["String"]>;
  passwordResetToken_is_set?: Maybe<Scalars["Boolean"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
  posts: Array<Post>;
  skills?: Maybe<Scalars["String"]>;
};

/**  A keystone list  */
export type User_PostsMetaArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortPostsBy>>;
  where?: InputMaybe<PostWhereInput>;
};

/**  A keystone list  */
export type UserPostsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Scalars["String"]>;
  search?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<Array<SortPostsBy>>;
  where?: InputMaybe<PostWhereInput>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars["String"]>;
  hobbies?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ProfileImageRelateToOneInput>;
  location?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyInput>;
  skills?: InputMaybe<Scalars["String"]>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars["Boolean"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  hobbies?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ProfileImageRelateToOneInput>;
  location?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthToken?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetToken?: InputMaybe<Scalars["String"]>;
  posts?: InputMaybe<PostRelateToManyInput>;
  skills?: InputMaybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  email?: InputMaybe<Scalars["String"]>;
  email_contains?: InputMaybe<Scalars["String"]>;
  email_contains_i?: InputMaybe<Scalars["String"]>;
  email_ends_with?: InputMaybe<Scalars["String"]>;
  email_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_i?: InputMaybe<Scalars["String"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not?: InputMaybe<Scalars["String"]>;
  email_not_contains?: InputMaybe<Scalars["String"]>;
  email_not_contains_i?: InputMaybe<Scalars["String"]>;
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  email_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  email_not_i?: InputMaybe<Scalars["String"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  email_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  email_starts_with?: InputMaybe<Scalars["String"]>;
  email_starts_with_i?: InputMaybe<Scalars["String"]>;
  hobbies?: InputMaybe<Scalars["String"]>;
  hobbies_contains?: InputMaybe<Scalars["String"]>;
  hobbies_contains_i?: InputMaybe<Scalars["String"]>;
  hobbies_ends_with?: InputMaybe<Scalars["String"]>;
  hobbies_ends_with_i?: InputMaybe<Scalars["String"]>;
  hobbies_i?: InputMaybe<Scalars["String"]>;
  hobbies_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hobbies_not?: InputMaybe<Scalars["String"]>;
  hobbies_not_contains?: InputMaybe<Scalars["String"]>;
  hobbies_not_contains_i?: InputMaybe<Scalars["String"]>;
  hobbies_not_ends_with?: InputMaybe<Scalars["String"]>;
  hobbies_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  hobbies_not_i?: InputMaybe<Scalars["String"]>;
  hobbies_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  hobbies_not_starts_with?: InputMaybe<Scalars["String"]>;
  hobbies_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  hobbies_starts_with?: InputMaybe<Scalars["String"]>;
  hobbies_starts_with_i?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  image?: InputMaybe<ProfileImageWhereInput>;
  image_is_null?: InputMaybe<Scalars["Boolean"]>;
  location?: InputMaybe<Scalars["String"]>;
  location_contains?: InputMaybe<Scalars["String"]>;
  location_contains_i?: InputMaybe<Scalars["String"]>;
  location_ends_with?: InputMaybe<Scalars["String"]>;
  location_ends_with_i?: InputMaybe<Scalars["String"]>;
  location_i?: InputMaybe<Scalars["String"]>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  location_not?: InputMaybe<Scalars["String"]>;
  location_not_contains?: InputMaybe<Scalars["String"]>;
  location_not_contains_i?: InputMaybe<Scalars["String"]>;
  location_not_ends_with?: InputMaybe<Scalars["String"]>;
  location_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  location_not_i?: InputMaybe<Scalars["String"]>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  location_not_starts_with?: InputMaybe<Scalars["String"]>;
  location_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  location_starts_with?: InputMaybe<Scalars["String"]>;
  location_starts_with_i?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_i?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_i?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_i?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  name_not_i?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_i?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetIssuedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  passwordResetRedeemedAt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars["String"]>;
  passwordResetRedeemedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>>
  >;
  passwordResetToken_is_set?: InputMaybe<Scalars["Boolean"]>;
  password_is_set?: InputMaybe<Scalars["Boolean"]>;
  /**  condition must be true for all nodes  */
  posts_every?: InputMaybe<PostWhereInput>;
  /**  condition must be false for all nodes  */
  posts_none?: InputMaybe<PostWhereInput>;
  /**  condition must be true for at least 1 node  */
  posts_some?: InputMaybe<PostWhereInput>;
  skills?: InputMaybe<Scalars["String"]>;
  skills_contains?: InputMaybe<Scalars["String"]>;
  skills_contains_i?: InputMaybe<Scalars["String"]>;
  skills_ends_with?: InputMaybe<Scalars["String"]>;
  skills_ends_with_i?: InputMaybe<Scalars["String"]>;
  skills_i?: InputMaybe<Scalars["String"]>;
  skills_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  skills_not?: InputMaybe<Scalars["String"]>;
  skills_not_contains?: InputMaybe<Scalars["String"]>;
  skills_not_contains_i?: InputMaybe<Scalars["String"]>;
  skills_not_ends_with?: InputMaybe<Scalars["String"]>;
  skills_not_ends_with_i?: InputMaybe<Scalars["String"]>;
  skills_not_i?: InputMaybe<Scalars["String"]>;
  skills_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  skills_not_starts_with?: InputMaybe<Scalars["String"]>;
  skills_not_starts_with_i?: InputMaybe<Scalars["String"]>;
  skills_starts_with?: InputMaybe<Scalars["String"]>;
  skills_starts_with_i?: InputMaybe<Scalars["String"]>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars["ID"];
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars["Boolean"]>;
  key?: InputMaybe<Scalars["String"]>;
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars["String"];
  description: Scalars["String"];
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost?: {
    __typename?: "Post";
    id: string;
    title?: string | null;
    description?: string | null;
    author?: { __typename?: "User"; name?: string | null } | null;
  } | null;
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeletePostMutation = {
  __typename?: "Mutation";
  deletePost?: { __typename?: "Post"; id: string } | null;
};

export type AllPostsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
}>;

export type AllPostsQuery = {
  __typename?: "Query";
  allPosts?: Array<{
    __typename?: "Post";
    id: string;
    title?: string | null;
    description?: string | null;
    author?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      image?: {
        __typename?: "ProfileImage";
        image?: {
          __typename?: "CloudinaryImage_File";
          publicUrlTransformed?: string | null;
        } | null;
      } | null;
    } | null;
  } | null> | null;
};

export type _AllPostsMetaQueryVariables = Exact<{ [key: string]: never }>;

export type _AllPostsMetaQuery = {
  __typename?: "Query";
  _allPostsMeta?: { __typename?: "_QueryMeta"; count?: number | null } | null;
};

export type GetSinglePostQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetSinglePostQuery = {
  __typename?: "Query";
  Post?: {
    __typename?: "Post";
    id: string;
    title?: string | null;
    description?: string | null;
    author?: {
      __typename?: "User";
      name?: string | null;
      id: string;
      email?: string | null;
      image?: {
        __typename?: "ProfileImage";
        image?: {
          __typename?: "CloudinaryImage_File";
          publicUrlTransformed?: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type SingleUserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleUserQuery = {
  __typename?: "Query";
  User?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    location?: string | null;
    skills?: string | null;
    hobbies?: string | null;
    posts: Array<{
      __typename?: "Post";
      id: string;
      title?: string | null;
      description?: string | null;
    }>;
    image?: {
      __typename?: "ProfileImage";
      image?: {
        __typename?: "CloudinaryImage_File";
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
  } | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: "Query";
  authenticatedItem?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    location?: string | null;
    skills?: string | null;
    hobbies?: string | null;
    posts: Array<{
      __typename?: "Post";
      id: string;
      title?: string | null;
      description?: string | null;
    }>;
    image?: {
      __typename?: "ProfileImage";
      altText?: string | null;
      image?: {
        __typename?: "CloudinaryImage_File";
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword:
    | {
        __typename?: "UserAuthenticationWithPasswordFailure";
        code: PasswordAuthErrorCode;
        message: string;
      }
    | {
        __typename?: "UserAuthenticationWithPasswordSuccess";
        item: {
          __typename?: "User";
          id: string;
          name?: string | null;
          email?: string | null;
        };
      };
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: "Mutation"; endSession: boolean };

export type SignUpMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
  } | null;
};

export type UpdatePostMutationVariables = Exact<{
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
}>;

export type UpdatePostMutation = {
  __typename?: "Mutation";
  updatePost?: {
    __typename?: "Post";
    id: string;
    title?: string | null;
    description?: string | null;
    author?: { __typename?: "User"; name?: string | null } | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  skills?: InputMaybe<Scalars["String"]>;
  hobbies?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    location?: string | null;
    skills?: string | null;
    hobbies?: string | null;
  } | null;
};

export type UpdateUserProfilePictureMutationVariables = Exact<{
  id: Scalars["ID"];
  image?: InputMaybe<Scalars["Upload"]>;
}>;

export type UpdateUserProfilePictureMutation = {
  __typename?: "Mutation";
  updateUser?: {
    __typename?: "User";
    id: string;
    image?: {
      __typename?: "ProfileImage";
      image?: {
        __typename?: "CloudinaryImage_File";
        publicUrlTransformed?: string | null;
      } | null;
    } | null;
  } | null;
};

export const CreatePostDocument = gql`
  mutation createPost($title: String!, $description: String!) {
    createPost(data: { title: $title, description: $description }) {
      id
      title
      description
      author {
        name
      }
    }
  }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const DeletePostDocument = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    options
  );
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>;
export type DeletePostMutationResult =
  Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export const AllPostsDocument = gql`
  query allPosts($skip: Int = 0, $first: Int) {
    allPosts(skip: $skip, first: $first) {
      id
      title
      description
      author {
        id
        name
        email
        image {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    options
  );
}
export function useAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPostsQuery,
    AllPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(
    AllPostsDocument,
    options
  );
}
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<
  typeof useAllPostsLazyQuery
>;
export type AllPostsQueryResult = Apollo.QueryResult<
  AllPostsQuery,
  AllPostsQueryVariables
>;
export function refetchAllPostsQuery(variables?: AllPostsQueryVariables) {
  return { query: AllPostsDocument, variables: variables };
}
export const _AllPostsMetaDocument = gql`
  query _allPostsMeta {
    _allPostsMeta {
      count
    }
  }
`;

/**
 * __use_AllPostsMetaQuery__
 *
 * To run a query within a React component, call `use_AllPostsMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `use_AllPostsMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = use_AllPostsMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function use_AllPostsMetaQuery(
  baseOptions?: Apollo.QueryHookOptions<
    _AllPostsMetaQuery,
    _AllPostsMetaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<_AllPostsMetaQuery, _AllPostsMetaQueryVariables>(
    _AllPostsMetaDocument,
    options
  );
}
export function use_AllPostsMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    _AllPostsMetaQuery,
    _AllPostsMetaQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<_AllPostsMetaQuery, _AllPostsMetaQueryVariables>(
    _AllPostsMetaDocument,
    options
  );
}
export type _AllPostsMetaQueryHookResult = ReturnType<
  typeof use_AllPostsMetaQuery
>;
export type _AllPostsMetaLazyQueryHookResult = ReturnType<
  typeof use_AllPostsMetaLazyQuery
>;
export type _AllPostsMetaQueryResult = Apollo.QueryResult<
  _AllPostsMetaQuery,
  _AllPostsMetaQueryVariables
>;
export function refetch_AllPostsMetaQuery(
  variables?: _AllPostsMetaQueryVariables
) {
  return { query: _AllPostsMetaDocument, variables: variables };
}
export const GetSinglePostDocument = gql`
  query getSinglePost($id: ID!) {
    Post(where: { id: $id }) {
      author {
        name
        id
        email
        image {
          image {
            publicUrlTransformed
          }
        }
      }
      id
      title
      description
    }
  }
`;

/**
 * __useGetSinglePostQuery__
 *
 * To run a query within a React component, call `useGetSinglePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSinglePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSinglePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSinglePostQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSinglePostQuery,
    GetSinglePostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSinglePostQuery, GetSinglePostQueryVariables>(
    GetSinglePostDocument,
    options
  );
}
export function useGetSinglePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSinglePostQuery,
    GetSinglePostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSinglePostQuery, GetSinglePostQueryVariables>(
    GetSinglePostDocument,
    options
  );
}
export type GetSinglePostQueryHookResult = ReturnType<
  typeof useGetSinglePostQuery
>;
export type GetSinglePostLazyQueryHookResult = ReturnType<
  typeof useGetSinglePostLazyQuery
>;
export type GetSinglePostQueryResult = Apollo.QueryResult<
  GetSinglePostQuery,
  GetSinglePostQueryVariables
>;
export function refetchGetSinglePostQuery(
  variables: GetSinglePostQueryVariables
) {
  return { query: GetSinglePostDocument, variables: variables };
}
export const SingleUserDocument = gql`
  query singleUser($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      email
      location
      skills
      hobbies
      posts {
        id
        title
        description
      }
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

/**
 * __useSingleUserQuery__
 *
 * To run a query within a React component, call `useSingleUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    SingleUserQuery,
    SingleUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SingleUserQuery, SingleUserQueryVariables>(
    SingleUserDocument,
    options
  );
}
export function useSingleUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SingleUserQuery,
    SingleUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SingleUserQuery, SingleUserQueryVariables>(
    SingleUserDocument,
    options
  );
}
export type SingleUserQueryHookResult = ReturnType<typeof useSingleUserQuery>;
export type SingleUserLazyQueryHookResult = ReturnType<
  typeof useSingleUserLazyQuery
>;
export type SingleUserQueryResult = Apollo.QueryResult<
  SingleUserQuery,
  SingleUserQueryVariables
>;
export function refetchSingleUserQuery(variables: SingleUserQueryVariables) {
  return { query: SingleUserDocument, variables: variables };
}
export const UserDocument = gql`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        email
        location
        skills
        hobbies
        posts {
          id
          title
          description
        }
        image {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
  return { query: UserDocument, variables: variables };
}
export const SignInDocument = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignOutDocument = gql`
  mutation signOut {
    endSession
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    options
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const SignUpDocument = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation updatePost($id: ID!, $title: String, $description: String) {
    updatePost(id: $id, data: { title: $title, description: $description }) {
      id
      title
      description
      author {
        name
      }
    }
  }
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    options
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult =
  Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $email: String
    $location: String
    $skills: String
    $hobbies: String
  ) {
    updateUser(
      id: $id
      data: {
        name: $name
        email: $email
        location: $location
        skills: $skills
        hobbies: $hobbies
      }
    ) {
      id
      name
      email
      location
      skills
      hobbies
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      location: // value for 'location'
 *      skills: // value for 'skills'
 *      hobbies: // value for 'hobbies'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpdateUserProfilePictureDocument = gql`
  mutation updateUserProfilePicture($id: ID!, $image: Upload) {
    updateUser(id: $id, data: { image: { create: { image: $image } } }) {
      id
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
export type UpdateUserProfilePictureMutationFn = Apollo.MutationFunction<
  UpdateUserProfilePictureMutation,
  UpdateUserProfilePictureMutationVariables
>;

/**
 * __useUpdateUserProfilePictureMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfilePictureMutation, { data, loading, error }] = useUpdateUserProfilePictureMutation({
 *   variables: {
 *      id: // value for 'id'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateUserProfilePictureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserProfilePictureMutation,
    UpdateUserProfilePictureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateUserProfilePictureMutation,
    UpdateUserProfilePictureMutationVariables
  >(UpdateUserProfilePictureDocument, options);
}
export type UpdateUserProfilePictureMutationHookResult = ReturnType<
  typeof useUpdateUserProfilePictureMutation
>;
export type UpdateUserProfilePictureMutationResult =
  Apollo.MutationResult<UpdateUserProfilePictureMutation>;
export type UpdateUserProfilePictureMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateUserProfilePictureMutation,
    UpdateUserProfilePictureMutationVariables
  >;
export type CloudinaryImage_FileKeySpecifier = (
  | "encoding"
  | "filename"
  | "id"
  | "mimetype"
  | "originalFilename"
  | "path"
  | "publicUrl"
  | "publicUrlTransformed"
  | CloudinaryImage_FileKeySpecifier
)[];
export type CloudinaryImage_FileFieldPolicy = {
  encoding?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  mimetype?: FieldPolicy<any> | FieldReadFunction<any>;
  originalFilename?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminMetaKeySpecifier = (
  | "enableSessionItem"
  | "enableSignout"
  | "list"
  | "lists"
  | KeystoneAdminMetaKeySpecifier
)[];
export type KeystoneAdminMetaFieldPolicy = {
  enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>;
  enableSignout?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaKeySpecifier = (
  | "createView"
  | "customViewsHash"
  | "fieldMeta"
  | "isOrderable"
  | "itemView"
  | "label"
  | "listView"
  | "path"
  | "viewsHash"
  | KeystoneAdminUIFieldMetaKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
  createView?: FieldPolicy<any> | FieldReadFunction<any>;
  customViewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  isOrderable?: FieldPolicy<any> | FieldReadFunction<any>;
  itemView?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  listView?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  viewsHash?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaItemViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = (
  | "fieldMode"
  | KeystoneAdminUIFieldMetaListViewKeySpecifier
)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
  fieldMode?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUIListMetaKeySpecifier = (
  | "description"
  | "fields"
  | "hideCreate"
  | "hideDelete"
  | "initialColumns"
  | "initialSort"
  | "isHidden"
  | "itemQueryName"
  | "key"
  | "label"
  | "labelField"
  | "listQueryName"
  | "pageSize"
  | "path"
  | "plural"
  | "singular"
  | KeystoneAdminUIListMetaKeySpecifier
)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  hideCreate?: FieldPolicy<any> | FieldReadFunction<any>;
  hideDelete?: FieldPolicy<any> | FieldReadFunction<any>;
  initialColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  initialSort?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelField?: FieldPolicy<any> | FieldReadFunction<any>;
  listQueryName?: FieldPolicy<any> | FieldReadFunction<any>;
  pageSize?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneAdminUISortKeySpecifier = (
  | "direction"
  | "field"
  | KeystoneAdminUISortKeySpecifier
)[];
export type KeystoneAdminUISortFieldPolicy = {
  direction?: FieldPolicy<any> | FieldReadFunction<any>;
  field?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KeystoneMetaKeySpecifier = (
  | "adminMeta"
  | KeystoneMetaKeySpecifier
)[];
export type KeystoneMetaFieldPolicy = {
  adminMeta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "authenticateUserWithPassword"
  | "createInitialUser"
  | "createPost"
  | "createPosts"
  | "createProfileImage"
  | "createProfileImages"
  | "createUser"
  | "createUsers"
  | "deletePost"
  | "deletePosts"
  | "deleteProfileImage"
  | "deleteProfileImages"
  | "deleteUser"
  | "deleteUsers"
  | "endSession"
  | "updatePost"
  | "updatePosts"
  | "updateProfileImage"
  | "updateProfileImages"
  | "updateUser"
  | "updateUsers"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createPost?: FieldPolicy<any> | FieldReadFunction<any>;
  createPosts?: FieldPolicy<any> | FieldReadFunction<any>;
  createProfileImage?: FieldPolicy<any> | FieldReadFunction<any>;
  createProfileImages?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePost?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePosts?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProfileImage?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteProfileImages?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  endSession?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePost?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePosts?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProfileImage?: FieldPolicy<any> | FieldReadFunction<any>;
  updateProfileImages?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostKeySpecifier = (
  | "author"
  | "description"
  | "id"
  | "title"
  | PostKeySpecifier
)[];
export type PostFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProfileImageKeySpecifier = (
  | "altText"
  | "id"
  | "image"
  | "photo"
  | ProfileImageKeySpecifier
)[];
export type ProfileImageFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  photo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "Post"
  | "ProfileImage"
  | "User"
  | "_PostsMeta"
  | "_ProfileImagesMeta"
  | "_UsersMeta"
  | "_allPostsMeta"
  | "_allProfileImagesMeta"
  | "_allUsersMeta"
  | "_ksListsMeta"
  | "allPosts"
  | "allProfileImages"
  | "allUsers"
  | "appVersion"
  | "authenticatedItem"
  | "keystone"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  Post?: FieldPolicy<any> | FieldReadFunction<any>;
  ProfileImage?: FieldPolicy<any> | FieldReadFunction<any>;
  User?: FieldPolicy<any> | FieldReadFunction<any>;
  _PostsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ProfileImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allPostsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allProfileImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  _ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  allPosts?: FieldPolicy<any> | FieldReadFunction<any>;
  allProfileImages?: FieldPolicy<any> | FieldReadFunction<any>;
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  appVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>;
  keystone?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "_postsMeta"
  | "email"
  | "hobbies"
  | "id"
  | "image"
  | "location"
  | "magicAuthIssuedAt"
  | "magicAuthRedeemedAt"
  | "magicAuthToken_is_set"
  | "name"
  | "passwordResetIssuedAt"
  | "passwordResetRedeemedAt"
  | "passwordResetToken_is_set"
  | "password_is_set"
  | "posts"
  | "skills"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  _postsMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  hobbies?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  location?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  magicAuthToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  password_is_set?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  skills?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = (
  | "code"
  | "message"
  | UserAuthenticationWithPasswordFailureKeySpecifier
)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
  code?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = (
  | "item"
  | "sessionToken"
  | UserAuthenticationWithPasswordSuccessKeySpecifier
)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListAccessKeySpecifier = (
  | "auth"
  | "create"
  | "delete"
  | "read"
  | "update"
  | _ListAccessKeySpecifier
)[];
export type _ListAccessFieldPolicy = {
  auth?: FieldPolicy<any> | FieldReadFunction<any>;
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  read?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListInputTypesKeySpecifier = (
  | "createInput"
  | "createManyInput"
  | "updateInput"
  | "updateManyInput"
  | "whereInput"
  | "whereUniqueInput"
  | _ListInputTypesKeySpecifier
)[];
export type _ListInputTypesFieldPolicy = {
  createInput?: FieldPolicy<any> | FieldReadFunction<any>;
  createManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateInput?: FieldPolicy<any> | FieldReadFunction<any>;
  updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereInput?: FieldPolicy<any> | FieldReadFunction<any>;
  whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMetaKeySpecifier = (
  | "access"
  | "description"
  | "key"
  | "label"
  | "name"
  | "path"
  | "plural"
  | "schema"
  | "singular"
  | _ListMetaKeySpecifier
)[];
export type _ListMetaFieldPolicy = {
  access?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  plural?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  singular?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListMutationsKeySpecifier = (
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "update"
  | "updateMany"
  | _ListMutationsKeySpecifier
)[];
export type _ListMutationsFieldPolicy = {
  create?: FieldPolicy<any> | FieldReadFunction<any>;
  createMany?: FieldPolicy<any> | FieldReadFunction<any>;
  delete?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMany?: FieldPolicy<any> | FieldReadFunction<any>;
  update?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMany?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListQueriesKeySpecifier = (
  | "item"
  | "list"
  | "meta"
  | _ListQueriesKeySpecifier
)[];
export type _ListQueriesFieldPolicy = {
  item?: FieldPolicy<any> | FieldReadFunction<any>;
  list?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaKeySpecifier = (
  | "fields"
  | "inputTypes"
  | "mutations"
  | "queries"
  | "relatedFields"
  | "type"
  | _ListSchemaKeySpecifier
)[];
export type _ListSchemaFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  inputTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  mutations?: FieldPolicy<any> | FieldReadFunction<any>;
  queries?: FieldPolicy<any> | FieldReadFunction<any>;
  relatedFields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaFieldsKeySpecifier = (
  | "name"
  | "path"
  | "type"
  | _ListSchemaFieldsKeySpecifier
)[];
export type _ListSchemaFieldsFieldPolicy = {
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _ListSchemaRelatedFieldsKeySpecifier = (
  | "fields"
  | "type"
  | _ListSchemaRelatedFieldsKeySpecifier
)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
  fields?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type _QueryMetaKeySpecifier = ("count" | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CloudinaryImage_FileKeySpecifier
      | (() => undefined | CloudinaryImage_FileKeySpecifier);
    fields?: CloudinaryImage_FileFieldPolicy;
  };
  KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminMetaKeySpecifier
      | (() => undefined | KeystoneAdminMetaKeySpecifier);
    fields?: KeystoneAdminMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaFieldPolicy;
  };
  KeystoneAdminUIFieldMetaCreateView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaCreateViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaItemView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaItemViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy;
  };
  KeystoneAdminUIFieldMetaListView?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | KeystoneAdminUIFieldMetaListViewKeySpecifier
      | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier);
    fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy;
  };
  KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUIListMetaKeySpecifier
      | (() => undefined | KeystoneAdminUIListMetaKeySpecifier);
    fields?: KeystoneAdminUIListMetaFieldPolicy;
  };
  KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneAdminUISortKeySpecifier
      | (() => undefined | KeystoneAdminUISortKeySpecifier);
    fields?: KeystoneAdminUISortFieldPolicy;
  };
  KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | KeystoneMetaKeySpecifier
      | (() => undefined | KeystoneMetaKeySpecifier);
    fields?: KeystoneMetaFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier);
    fields?: PostFieldPolicy;
  };
  ProfileImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProfileImageKeySpecifier
      | (() => undefined | ProfileImageKeySpecifier);
    fields?: ProfileImageFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAuthenticationWithPasswordFailure?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordFailureKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier);
    fields?: UserAuthenticationWithPasswordFailureFieldPolicy;
  };
  UserAuthenticationWithPasswordSuccess?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserAuthenticationWithPasswordSuccessKeySpecifier
      | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier);
    fields?: UserAuthenticationWithPasswordSuccessFieldPolicy;
  };
  _ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListAccessKeySpecifier
      | (() => undefined | _ListAccessKeySpecifier);
    fields?: _ListAccessFieldPolicy;
  };
  _ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListInputTypesKeySpecifier
      | (() => undefined | _ListInputTypesKeySpecifier);
    fields?: _ListInputTypesFieldPolicy;
  };
  _ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListMetaKeySpecifier
      | (() => undefined | _ListMetaKeySpecifier);
    fields?: _ListMetaFieldPolicy;
  };
  _ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListMutationsKeySpecifier
      | (() => undefined | _ListMutationsKeySpecifier);
    fields?: _ListMutationsFieldPolicy;
  };
  _ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListQueriesKeySpecifier
      | (() => undefined | _ListQueriesKeySpecifier);
    fields?: _ListQueriesFieldPolicy;
  };
  _ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaKeySpecifier
      | (() => undefined | _ListSchemaKeySpecifier);
    fields?: _ListSchemaFieldPolicy;
  };
  _ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaFieldsKeySpecifier
      | (() => undefined | _ListSchemaFieldsKeySpecifier);
    fields?: _ListSchemaFieldsFieldPolicy;
  };
  _ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _ListSchemaRelatedFieldsKeySpecifier
      | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier);
    fields?: _ListSchemaRelatedFieldsFieldPolicy;
  };
  _QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | _QueryMetaKeySpecifier
      | (() => undefined | _QueryMetaKeySpecifier);
    fields?: _QueryMetaFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
