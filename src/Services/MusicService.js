export default class MusicService {
  static async getMusic() {
    const response = await fetch("https://cms.samespace.com/items/songs");

    return response.json();
  }
}
