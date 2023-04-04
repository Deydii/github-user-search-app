import { reactive } from 'vue';
import axios from 'axios';

interface Store {
  inputValue: string,
  loading: boolean,
  result?: {
    avatar: string,
    name?: string,
    login: string,
    created_at: string,
    bio?: string,
    repos: number,
    followers: number,
    following: number,
    location?: string,
    twitter?: string,
    blog?: string,
    company?: string
  },
  isError: boolean,
  loadData: (user: string) => void
}

export const store: Store = reactive({
  inputValue: "",
  loading: false,
  result: undefined,
  isError: false,
  async loadData (user: string) {
    if (!user) {
      store.isError =  true;
    } else {
      store.loading = true;
      store.isError =  false;
      await axios.get(`https://api.github.com/users/${user}`)
      .then(({ data }) => {
        const date = new Date(data.created_at).toString().split(" ");
        const newDateFormat = [date[2], date[1], date[3]];
  
        store.result = {
          avatar: data.avatar_url,
          name: data.name,
          login: data.login,
          created_at: newDateFormat.join(" "),
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
          twitter: data.twitter_username,
          blog: data.blog,
          company: data.company
        }
      })
      .catch(() => {
        store.isError = true
      })
      .finally(() => store.loading = false)
   }
  }
});
