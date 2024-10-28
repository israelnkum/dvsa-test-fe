import ProfileDropdown from "./header/profile-dropdown.tsx";

export default function Header() {
    return (
      <div className={"bg-white p-5 flex justify-end items-center"}>
          {/*<QuickAction/>*/}
          <ProfileDropdown/>
      </div>
    );
}