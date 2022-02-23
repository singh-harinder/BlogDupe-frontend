import { gql } from '@apollo/client';

export default function paginationField() {
  return {
    keyArgs: false,

    read(
      existing = [],
      {
        field,
        args,
        readField,
        cache,
      }: { field: any; args: any; readField: any; cache: any }
    ) {
      const { skip, first } = args;

      const data = cache.readQuery({
        query: gql`
          query {
            _allPostsMeta {
              count
            }
          }
        `,
      });
      const count = data?._allPostsMeta?.count;

      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      const items = existing
        .slice(skip, skip + first)

        .filter((x) => x);

      if (items.length && items.length !== args.first && page === pages) {
        return items;
      }

      if (items.length !== args.first) {
        return undefined;
      }

      if (items.length) {
        return items;
      }

      return undefined;
    },

    merge(
      existing: any,
      incoming: any,
      { args, field }: { args: any; field: any }
    ) {
      const { skip, first } = args;

      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    },
  };
}
