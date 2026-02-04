import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveProfile } from "../features/ui/uiSlice";

const ProfileSelect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profiles = [
    {
      id: "p1",
      name: "Akuram",
      avatar: "https://img.freepik.com/premium-photo/3d-rendered-detailed-image-men-created-with-generative-ai_1002229-1407.jpg",
    },
    {
      id: "p2",
      name: "John",
      avatar: "https://images.nightcafe.studio/jobs/3CnG0cPPO96LgeU1uZ1Q/3CnG0cPPO96LgeU1uZ1Q--1--ezyqa.jpg?tr=w-1600,c-at_max",
    },
    {
      id: "p3",
      name: "Alex",
      avatar: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
    },
    {
      id: "p4",
      name: "Sophia",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERjAcudY3_KF1syaXQUhQdabI9OWzp4NnxA&s",
    },
    {
      id: "p5",
      name: "Kids",
      avatar: "https://images.generated.photos/3UI1G0b6CqrhC47ITk05d5qENOii_hteqlcbbnOwF5E/g:no/rs:fill:256:384/czM6Ly9ncGhvdG9z/LXByb2QtaHVtYW4t/Z2FsbGVyeS83MDgv/OWQzNTYwMWYtZGIz/OS00OGNjLWIwOTMt/MjIzNmM0MDg1YWUz/LTAuanBn.jpg",
    },
    {
      id: "p6",
      name: "Merin",
      avatar: "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/ai-fashion-models/photos/indian_female/Indian_female_outdoor_midframe_2_1.webp",
    },
  ];

  const handleSelect = (profile) => {
    dispatch(setActiveProfile(profile));
    navigate("/");
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-12">Who's watching?</h1>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => handleSelect(profile)}
            className="cursor-pointer text-center group"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-28 h-28 rounded-lg border-2 border-transparent 
                         group-hover:border-white transition"
            />
            <p className="mt-3 text-lg text-gray-400 group-hover:text-white">
              {profile.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelect;
