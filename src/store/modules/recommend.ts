import { useAsync } from '@/hook/useAsync'
import { useHttp } from '@/utils/http'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface RecommendState {
  banners: any[]
}

export const fetchBanner = createAsyncThunk('banner?type=2', async () => {
  const client = useHttp()
  const { run, ...result } = useAsync()

  const fetchBanner = () => client({ url: 'banner?type=2' })

  run(fetchBanner())
  console.log(result)

  return result
})

// export const fetchBanners = createAsyncThunk('banner', async () => {
//   console.log(123)
//   const client = useHttp()
//   const { run, ...result } = useAsync()

//   const fetchBanner = () =>
//     client({ url: 'api/comment/music?id=186016&limit=1' })

//   run(fetchBanner())
//   return result
// })

const initialState: RecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    fetchBanner(state, { payload }) {
      console.log(payload)
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBanner.pending, (state, action) => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBanner.fulfilled, (state, action) => {
  //       console.log(action)

  //       console.log('fulfilled')
  //     })
  //     .addCase(fetchBanner.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export default recommendSlice.reducer
