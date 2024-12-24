import { Students, Student } from 'types/students.type'
import http from 'utils/http'

// cal api
export const getStudents = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  //truyền generic type methods get sẽ trả về Students[]
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })

// methos get student trả vế 1 student
export const getStudent = (id: number | string) => http.get<Student>(`students/${id}`)

// methos add trả về 1 student, Omit loại bò trường id
export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('/students', student)

// method update trả về 1 student sau khi update
export const updateStudent = (id: number | string, student: Student) => http.put<Student>(`students/${id}`, student)

// method delete trả về {} sau khi xóa
export const deleteStudent = (id: number | string) => http.delete<{}>(`students/${id}`)
