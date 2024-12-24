export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}

/**
 * Pick => chọn interface nào
 * Chọn interface Student và các filed 'id' | 'email' | 'avatar' | 'last_name' của student
 */
export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
