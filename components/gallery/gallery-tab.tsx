import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
    image: ImageType
};


const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab className="relative aspect-square flex cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden mounded-md">
                        <Image fill src={image.url} alt="" className="object-cover object-center" />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md overflow-hidden ring-2 ring-offset-2 ring-opacity-60", selected ? "ring-black" : "ring-transparent"
                    )} />
                </div>
            )}
        </Tab>
    )
}

export default GalleryTab;