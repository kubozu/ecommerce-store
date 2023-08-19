"use client";

import { Tab } from "@headlessui/react";

import GalleryTab from "@/components/gallery/gallery-tab";
import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels className="aspect-square w-full ">
        {images.map((image) => (
          <Tab.Panel key={image.id} className="aspect-square">
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt="Image"
                fill
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image}></GalleryTab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}

export default Gallery;
