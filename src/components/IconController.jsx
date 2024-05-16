import { Smile } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "../components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconListDialog from './IconListDialog';
function IconController() {
    const storageValue = JSON.parse(localStorage.getItem('value'));
    const [size, setSize] = useState(storageValue ? storageValue.iconSize : 280);
    const [rotate, setRotate] = useState(storageValue ? storageValue.iconRotate : 0);
    const [color, setColor] = useState(storageValue ? storageValue.iconColor : '#fff');
    const [selectedIcon, setSelectedIcon] = useState(storageValue ? storageValue?.icon : "smile");
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

    useEffect(() => {
        const updatedValue = { ...storageValue, iconSize: size, iconRotate: rotate, iconColor: color, icon: selectedIcon, };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotate, color, selectedIcon])

    return (
        <div>
            {/* <label>Icon</label>
            <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center'>
                <Smile ></Smile>
            </div> */}
            <IconListDialog selectedIcon={(icon) => setSelectedIcon(icon)} />
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Size <span>{size} px</span></label>
                <Slider onValueChange={(event) => setSize(event[0])} defaultValue={[size]} max={512} step={1} />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Rotate <span>{rotate} °</span></label>
                <Slider onValueChange={(event) => setRotate(event[0])} defaultValue={[rotate]} max={360} step={1} />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>Icon Color</label>
                <ColorPickerController hideController={true} selectedColor={(color) => setColor(color)} />
            </div>
        </div>
    )
}

export default IconController