import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTabProps {
    image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab
            className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md"
        >
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-xl">
                        <NextImage
                            fill
                            src={image.url}
                            alt=""
                            className="object-cover object-center"
                        />
                    </span>
                    <span
                        className={cn(
                            'absolute inset-0 rounded-xl ring-4 ring-offset-2',
                            selected ? 'ring-black' : 'ring-yellow-300',
                        )}
                    />
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;