function make_album(artistName: string, albumTitle: string) {
    interface Album {
      artistName: string;
      albumTitle: string;
    }
  
    const album: Album = {
      artistName: artistName,
      albumTitle: albumTitle
    };
  
    return album;
  }
  
  const album1 = make_album("j.cole", "Dreamville");
  console.log(album1);
  
  const album2 = make_album("jay-z", "99 Problems");
  console.log(album2);
  
  const album3 = make_album("50cents", "Re-Up");
  console.log(album3);
  