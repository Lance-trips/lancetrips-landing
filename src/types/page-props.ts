export type PageProps<Params extends Record<string, string> = {}> = {
    params: Params
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
  