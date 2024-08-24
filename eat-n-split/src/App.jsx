import { useState } from 'react'

import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend , setShowAddFriend] = useState(false)
  const [friend,setFriend] = useState(initialFriends)
  const [selectedFriend , setSelectedFriend] = useState(null)



  function handleShowAddFriend() {
    setShowAddFriend(showAddFriend ? false :true)
  }

  function handleAddFriend(friends) {
    setFriend((friend) => [...friend , friends])
    setShowAddFriend(!showAddFriend)
  }

  function handleSeclectFriend(friend) {
    setSelectedFriend((cur) => 
      (cur?.id  === friend.id ?  null : friend)
    )
     
  }
   
  function handleSplitBill(value ) {
    console.log(value);
    
    setFriend((friends) => friends.map((friend) => 
        friend.id === selectedFriend.id ? 
        {...friend , balance :  friend.balance + value}
        : friend
    ))
    setSelectedFriend(null)
  }
   

  
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friend={friend} onSelectFriend={handleSeclectFriend}  onSelectObject={selectedFriend}  />
          {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? `close` : `Add Friend`}{" "}
          </Button>
        </div>
        {selectedFriend && <Split onselectedFriend={selectedFriend}  onHandleSplitBill={handleSplitBill}/>}
      </div>
    </>
  );
}

function FriendList({ friend, onSelectFriend, onSelectObject }) {
  const data = friend;
  return (
    <>
      <ul>
        {data.map((friend, index) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectFriend={onSelectFriend}
            onSelectObject={onSelectObject}
          />
        ))}
      </ul>
    </>
  );
} 


function Friend({ friend, key, onSelectFriend, onSelectObject }) {
  const isSelect = friend?.id === onSelectObject?.id;
  return (
    <li key={key} className={isSelect ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <Button
        onClick={() => {
          onSelectFriend(friend);
        }}
      >
        {!isSelect ? "Select" : "close"}
      </Button>
    </li>
  );
}

function AddFriend({onAddFriend}) {
  const [name , setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  
  function handleFromAddFriend(e) {
    e.preventDefault();
    const id = self.crypto.randomUUID();
    if (!name || !image ) return;

    const newFriend = { 
      id, 
      name,
      image : `${image}?=${id}`, 
      balance : 0
    }
      onAddFriend(newFriend)
      console.log(newFriend);
    
    
    setName("")
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑friend name</label>
      <input type="text" value={name}  onChange={(e) =>  setName(e.target.value)} />
      <label>🖼️ Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value) } />
      <Button onClick={(e) => handleFromAddFriend(e)}>Add</Button>
    </form>
  );
}



function Split({ onselectedFriend , onHandleSplitBill }) {
  const [bill, setBill] = useState(null);
  const [mePaid, setMePaid] = useState(null);
  const [option, setOption] = useState("user");
  const friendPaid = bill ? bill - mePaid : null;

  // function handleSplitBill(e) {
  //   e.preventDefault();
  //   const balance = onselectedFriend.balance
  //   if (option === "user") {

  //     if(balance < 0 ) {
  //       onselectedFriend.balance = balance - Number(-Friendexpense);
  //     }
  //     if (balance > 0) {
  //       onselectedFriend.balance = balance + Number(Friendexpense);
  //     }

  //   }else {
  //     if(balance < 0) {
  //       onselectedFriend.balance = balance - Number(MeExpense)
  //     }
  //     if (balance > 0) {
  //       onselectedFriend.balance = balance - Number(MeExpense)
  //     }
  //   }

  //   console.log(onselectedFriend);

  //   setExpense(0)
  //   setMeExpense(0)
  // }
  function handleSplitBill(e) {
    e.preventDefault()
     
    
    if (option === "user") { 
       onHandleSplitBill(+friendPaid)
    }else {
      onHandleSplitBill(-mePaid)
    }
  }
  return (
    <form className="form-split-bill" onSubmit={(e) => handleSplitBill(e)}>
      <h2>Split a bill with {onselectedFriend.name}</h2>

      <label>💴 bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => 
          setBill( Number(e.target.value))
        }
      />

      <label>💪Your expense</label>
      <input
        type="text"
        typeof="numeric"
        value={mePaid}
        onChange={(e) => {
          bill > Number(e.target.value)
            ? setMePaid(Number(e.target.value))
            : setMePaid(bill);
        }}
      />

      <label>😤 {onselectedFriend.name}'s expense</label>
      <input type="text" value={friendPaid} disabled />

      <label>😎 Who is paying the bill</label>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="user">you</option>
        <option value="friend">{onselectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function Button({children , onClick}) {
  return (
     <button className='button' onClick={onClick}>{children}</button>
  );
}