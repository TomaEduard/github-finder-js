class Github {
  constructor() {
    this.client_id = '7bb055279c9d7d211d4f';
    this.client_secret = '189ec4de5777954a260ce66b75372bc28dc0fcdb';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Get Json data
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}