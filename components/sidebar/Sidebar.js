import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import {
    ChevronDownIcon,
    ClockIcon,
    UserGroupIcon,
    UsersIcon,
} from "@heroicons/react/solid"
import {
    ShoppingBagIcon,
} from "@heroicons/react/outline"

function Sidebar() {
    const session = useSession();
    const {name, image} = session.data.user
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={image} title={name} />
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar;