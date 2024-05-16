import React, { useState } from "react";
import { icons } from "lucide-react";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { iconList } from "../constants/icon";

const IconListDialog = ({ selectedIcon }) => {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [openList, setOpenList] = useState(false);
    const [icon, setIcon] = useState(storageValue ? storageValue.icon : "smile");

    const Icon = ({ name, color, size }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return;
        }
        return <LucidIcon color={color} size={size} />;
    };
    return (
        <div>
            <div>
                <label>Icon</label>

                <div
                    onClick={() => setOpenList(true)}
                    className="p-3 cursor-pointer bg-gray-300 rounded-md 
                        w-[50px] h-[50px] my-2 flex items-center justify-center"
                >
                    <Icon name={icon} color={"#000"} size={20} />
                </div>
            </div>
            <AlertDialog open={openList}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Pick Your Icon</AlertDialogTitle>
                        <AlertDialogDescription className="overflow-auto h-[400px]">
                            <div
                                className="grid grid-cols-2 md:grid-cols-4
                 gap-4 lg:grid-cols-5 p-6 "
                            >
                                {iconList && iconList.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="p-3 border flex rounded-sm 
                         items-center justify-center cursor-pointer"
                                        onClick={() => {
                                            selectedIcon(icon);
                                            setIcon(icon);
                                            setOpenList(false);
                                        }}
                                    >
                                        <Icon name={icon} color={"#000"} size={20} component={'div'} />
                                    </div>
                                ))}
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpenList(false)}>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default IconListDialog;