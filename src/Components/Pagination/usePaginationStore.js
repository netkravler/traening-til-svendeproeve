import create from 'zustand'

export const usePaginationStore = create((set) => ({

  paginationState:[],
  setPagination: (chunk) => set(() => ({paginationState : chunk}))
}))