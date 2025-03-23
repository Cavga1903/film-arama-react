import { auth, provider, signInWithPopup, signOut } from "../firebase";

function Auth({ user, setUser }) {
  const girisYap = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => alert("Giriş başarısız: " + err.message));
  };

  const cikisYap = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <div className="flex justify-end mb-4">
      {user ? (
        <div className="flex items-center space-x-4">
          <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
          <span>{user.displayName}</span>
          <button onClick={cikisYap} className="text-red-500 hover:underline">Çıkış Yap</button>
        </div>
      ) : (
        <button onClick={girisYap} className="text-blue-500 hover:underline">Google ile Giriş Yap</button>
      )}
    </div>
  );
}

export default Auth;