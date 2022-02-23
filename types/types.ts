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
