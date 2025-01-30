export type PageProps<T extends Record<string, unknown> = Record<string, never>> = {
    params: T
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
  