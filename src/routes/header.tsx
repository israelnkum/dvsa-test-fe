import ProfileDropdown from "./header/profile-dropdown.tsx";
import QuickAction from "./header/quick-action.tsx";

export default function Header() {
    return (
      <div className={"bg-white p-5 flex justify-between items-center"}>
          <QuickAction/>
          <ProfileDropdown/>
      </div>
    );
}